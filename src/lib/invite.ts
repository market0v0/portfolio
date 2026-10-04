// Rules for the /invite form, and packing a finished invite into a shareable reply link.

export type MeetingFormat = 'phone' | 'video' | 'in-person' | ''

export interface InviteForm {
  date: string
  time: string
  timezone: string
  format: MeetingFormat
  platform: string
  phone: string
  location: string
  name: string
  purpose: string
}

export const emptyInvite: InviteForm = {
  date: '',
  time: '',
  timezone: '',
  format: '',
  platform: '',
  phone: '',
  location: '',
  name: '',
  purpose: ''
}

export const platforms = ['Messenger', 'Google Meet', 'Zoom', 'Discord', 'Other']

export const formatLabels: Record<Exclude<MeetingFormat, ''>, string> = {
  phone: 'Phone call',
  video: 'Video call',
  'in-person': 'In person'
}

// Wizard steps after the "Are you free later?" question
export type InviteStep = 'when' | 'how' | 'you'

export interface Requirement {
  key: string
  step: InviteStep
  label: string
  met: boolean
}

const PHONE_RE = /^\+?[\d\s()-]{7,20}$/

// Invites are only for the coming week
export const MAX_DAYS_AHEAD = 7

// Adds days to a YYYY-MM-DD string (calendar math, no timezone drift)
export function addDays (iso: string, days: number): string {
  const [y, m, d] = iso.split('-').map(Number)
  const date = new Date(Date.UTC(y, m - 1, d + days))
  return date.toISOString().slice(0, 10)
}

// `today` is YYYY-MM-DD and `nowTime` HH:MM in the visitor's local time; `maxDays` is how far ahead a date may be
export function inviteRequirements (f: InviteForm, today: string, nowTime = '00:00', maxDays = MAX_DAYS_AHEAD): Requirement[] {
  // maxDays counts today, so 7 means today through 6 days from now
  const latest = addDays(today, maxDays - 1)
  const reqs: Requirement[] = [
    { key: 'date', step: 'when', label: 'A date within the next 7 days', met: /^\d{4}-\d{2}-\d{2}$/.test(f.date) && f.date >= today && f.date <= latest },
    // A time earlier today has already passed
    { key: 'time', step: 'when', label: 'A time that hasn\'t passed yet', met: /^\d{2}:\d{2}$/.test(f.time) && !(f.date === today && f.time <= nowTime) },
    { key: 'format', step: 'how', label: 'Call, video or in person', met: f.format !== '' }
  ]
  if (f.format === 'phone') {
    reqs.push({ key: 'phone', step: 'how', label: 'A number Mark can call', met: PHONE_RE.test(f.phone.trim()) })
  }
  if (f.format === 'video') {
    reqs.push({ key: 'platform', step: 'how', label: 'Which app to video call on', met: platforms.includes(f.platform) })
  }
  if (f.format === 'in-person') {
    reqs.push({ key: 'location', step: 'how', label: 'Where to hang out', met: f.location.trim().length >= 3 })
  }
  reqs.push(
    { key: 'name', step: 'you', label: 'Your name', met: f.name.trim().length >= 2 },
    { key: 'purpose', step: 'you', label: "What's the plan", met: f.purpose.trim().length >= 3 }
  )
  return reqs
}

// --- Reply links -----------------------------------------------------------------
// The whole reply lives in the URL (/invite/reply?r=...): no server, no storage.
// Short keys keep the link compact.

interface Packed { v: 1, d: string, t: string, z: string, f: MeetingFormat, x: string, n: string, m: string }

const toBase64Url = (text: string): string => {
  const bytes = new TextEncoder().encode(text)
  let bin = ''
  bytes.forEach((b) => { bin += String.fromCharCode(b) })
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

const fromBase64Url = (code: string): string => {
  const b64 = code.replace(/-/g, '+').replace(/_/g, '/')
  const bin = atob(b64 + '='.repeat((4 - (b64.length % 4)) % 4))
  return new TextDecoder().decode(Uint8Array.from(bin, (c) => c.charCodeAt(0)))
}

// The one detail that goes with the chosen format
export const formatDetail = (f: InviteForm): string =>
  f.format === 'phone' ? f.phone : f.format === 'video' ? f.platform : f.format === 'in-person' ? f.location : ''

export function encodeInvite (f: InviteForm): string {
  const packed: Packed = { v: 1, d: f.date, t: f.time, z: f.timezone, f: f.format, x: formatDetail(f).trim(), n: f.name.trim(), m: f.purpose.trim() }
  return toBase64Url(JSON.stringify(packed))
}

// Returns null for anything that isn't a well-formed reply (typos, truncated links, tampering)
export function decodeInvite (code: string): InviteForm | null {
  try {
    const p = JSON.parse(fromBase64Url(code)) as Partial<Packed>
    const str = (v: unknown, max: number): string => (typeof v === 'string' ? v.slice(0, max) : '')
    const format = (['phone', 'video', 'in-person'] as const).find((x) => x === p.f)
    const form: InviteForm = {
      ...emptyInvite,
      date: str(p.d, 10),
      time: str(p.t, 5),
      timezone: str(p.z, 64),
      format: format ?? '',
      name: str(p.n, 100),
      purpose: str(p.m, 2000)
    }
    const detail = str(p.x, 200)
    if (form.format === 'phone') form.phone = detail
    if (form.format === 'video') form.platform = detail
    if (form.format === 'in-person') form.location = detail
    const valid = p.v === 1 && /^\d{4}-\d{2}-\d{2}$/.test(form.date) && /^\d{2}:\d{2}$/.test(form.time) &&
      form.format !== '' && detail !== '' && form.name !== '' && form.purpose !== ''
    return valid ? form : null
  } catch {
    return null
  }
}

// --- Time zones --------------------------------------------------------------------

// Offset (ms) of `timeZone` from UTC at a given instant
const zoneOffset = (instant: number, timeZone: string): number => {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone, hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'
  }).formatToParts(new Date(instant))
  const get = (type: string): number => Number(parts.find((x) => x.type === type)?.value)
  return Date.UTC(get('year'), get('month') - 1, get('day'), get('hour'), get('minute'), get('second')) - instant
}

// The real moment for a wall-clock date + time in a time zone (UTC if the zone is unknown)
export function zonedToUtc (date: string, time: string, timeZone: string): Date {
  const [y, m, d] = date.split('-').map(Number)
  const [hh, mm] = time.split(':').map(Number)
  const guess = Date.UTC(y, m - 1, d, hh, mm)
  try {
    const first = guess - zoneOffset(guess, timeZone)
    // Second pass settles daylight-saving edges
    return new Date(guess - zoneOffset(first, timeZone))
  } catch {
    return new Date(guess)
  }
}

export const MARK_TIMEZONE = 'Asia/Manila'

// Google Calendar "add event" link (1 hour long)
export function calendarLink (f: InviteForm): string {
  const start = zonedToUtc(f.date, f.time, f.timezone !== '' ? f.timezone : MARK_TIMEZONE)
  const end = new Date(start.getTime() + 60 * 60 * 1000)
  const stamp = (d: Date): string => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
  const how = f.format !== '' ? formatLabels[f.format] : 'Hang out'
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `${how} with ${f.name}`,
    dates: `${stamp(start)}/${stamp(end)}`,
    details: f.purpose,
    location: formatDetail(f)
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}
