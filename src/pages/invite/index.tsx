import React, { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Collage, Label, Scribble, Tape, ZineHead, bodyFont, chipCls, display, hand, inkBtn, inkBtnMotion, inputCls } from '@/components/invite/zine'
import {
  MAX_DAYS_AHEAD,
  addDays,
  emptyInvite,
  encodeInvite,
  formatLabels,
  inviteRequirements,
  platforms,
  type InviteForm,
  type InviteStep,
  type MeetingFormat
} from '@/lib/invite'

// Private page: no link anywhere on the site. Reached by typing /invite or via the chat's /invite command.
// Nothing is sent anywhere: the finished answers are packed into a reply link
// (/invite/reply?r=...) that the visitor copies or shares back to Mark.

type Step = 'ask' | InviteStep | 'done'

const steps: InviteStep[] = ['when', 'how', 'you']
const stepNames: Record<InviteStep, string> = { when: 'When', how: 'How', you: 'You' }
const quickTimes = [{ label: '9:00 AM', value: '09:00' }, { label: '1:00 PM', value: '13:00' }, { label: '4:00 PM', value: '16:00' }, { label: '7:00 PM', value: '19:00' }]
const placeIdeas = ['A cozy coffee shop', 'Somewhere to eat', 'A walk by the sea', 'You pick!']
const noLabels = ['No', 'Nope', 'Too slow!', 'Not an option', 'Try again', 'Just say yes']

const localToday = (): string => {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

// A button that refuses to be clicked: when hovered it jumps to a random spot anywhere
// in the viewport, away from the cursor (and from `avoid`, e.g. the Yes button).
const useShyButton = (avoid?: React.RefObject<HTMLElement>): {
  ref: React.RefObject<HTMLButtonElement>
  offset: { x: number, y: number }
  dodges: number
  handlers: Record<string, (e: React.SyntheticEvent) => void>
  reset: () => void
} => {
  const ref = useRef<HTMLButtonElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [dodges, setDodges] = useState(0)
  const lastDodge = useRef(0)

  const dodge = (pointer?: { x: number, y: number }): void => {
    // Hover, press and click can all fire for one attempt; count it once
    const now = Date.now()
    if (now - lastDodge.current < 300) return
    lastDodge.current = now

    const btn = ref.current
    if (btn == null) return
    const rect = btn.getBoundingClientRect()
    const avoidRect = avoid?.current?.getBoundingClientRect()
    // Where the button sits with no offset applied. Read the live transform rather
    // than the target offset, since the spring may still be mid-flight.
    const live = new DOMMatrixReadOnly(getComputedStyle(btn).transform === 'none' ? undefined : getComputedStyle(btn).transform)
    const homeX = rect.left - live.m41
    const homeY = rect.top - live.m42
    const margin = 20
    const maxX = window.innerWidth - rect.width - margin
    const maxY = window.innerHeight - rect.height - margin
    const from = pointer ?? { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }

    let target = { x: margin, y: margin }
    for (let i = 0; i < 40; i++) {
      target = { x: margin + Math.random() * (maxX - margin), y: margin + Math.random() * (maxY - margin) }
      const overlaps = avoidRect != null &&
        target.x < avoidRect.right + 24 && target.x + rect.width > avoidRect.left - 24 &&
        target.y < avoidRect.bottom + 24 && target.y + rect.height > avoidRect.top - 24
      const awayFromCursor = Math.hypot(target.x + rect.width / 2 - from.x, target.y + rect.height / 2 - from.y) > 220
      if (!overlaps && awayFromCursor) break
    }
    setOffset({ x: target.x - homeX, y: target.y - homeY })
    setDodges((d) => d + 1)
  }

  const at = (e: React.SyntheticEvent): { x: number, y: number } | undefined => {
    const ev = e.nativeEvent as Partial<MouseEvent>
    return ev.clientX != null && ev.clientY != null ? { x: ev.clientX, y: ev.clientY } : undefined
  }

  return {
    ref,
    offset,
    dodges,
    handlers: {
      // Only hovering makes it move (a tap counts as hover on touch screens).
      // Presses and clicks that still land are simply ignored.
      onPointerEnter: (e) => { dodge(at(e)) },
      onPointerDown: (e) => { e.preventDefault() },
      onClick: (e) => { e.preventDefault() }
    },
    reset: () => { setOffset({ x: 0, y: 0 }); setDodges(0) }
  }
}

// "Are you free later?" — the No button refuses to be clicked -------------------

const AskStep: React.FC<{ onYes: () => void }> = ({ onYes }) => {
  const yesRef = useRef<HTMLButtonElement>(null)
  const { ref: noRef, offset, dodges, handlers } = useShyButton(yesRef)

  const yesScale = Math.min(1 + dodges * 0.08, 1.5)

  return (
    <div>
      <div className='mb-6 inline-block -rotate-2 border-[2.5px] border-ink bg-paper px-4 py-1.5 text-sm font-bold uppercase tracking-[0.25em] text-ink shadow-[4px_4px_0_#111]'>
        ✦ Private invite
      </div>
      <h1 className='mb-5 text-[2.9rem] leading-[0.95] text-ink sm:text-[4.2rem] lg:text-[5.4rem]' style={display}>
        Hey! Are you<br />
        <Scribble>free later?</Scribble>
      </h1>
      <p className='max-w-md text-[1.15rem] font-medium text-ink/80'>
        Mark would love to hang out. A call, a video chat, or meeting up in person, your call.
      </p>

      <div className='relative mt-6 h-40 w-full max-w-xl'>
        <motion.button
          ref={yesRef}
          type='button'
          onClick={onYes}
          animate={{ scale: yesScale }}
          whileTap={{ scale: yesScale * 0.92 }}
          transition={{ type: 'spring', stiffness: 300, damping: 14 }}
          className={`absolute left-0 top-[calc(50%-28px)] h-14 origin-left ${inkBtnMotion} text-lg`}
          style={display}
        >
          YES!
        </motion.button>
        <motion.button
          ref={noRef}
          type='button'
          aria-label='No (this button is shy)'
          {...handlers}
          animate={{ x: offset.x, y: offset.y, rotate: dodges === 0 ? 0 : (dodges % 2 === 0 ? -7 : 6) }}
          transition={{ type: 'spring', stiffness: 520, damping: 20 }}
          className='absolute left-[11rem] top-[calc(50%-28px)] z-50 h-14 whitespace-nowrap border-[2.5px] border-ink bg-paper px-7 text-lg font-bold text-ink shadow-[5px_5px_0_#111]'
        >
          {noLabels[Math.min(dodges, noLabels.length - 1)]}
        </motion.button>
      </div>

      <AnimatePresence>
        {dodges >= 3 && (
          <motion.p
            initial={{ opacity: 0, rotate: -6, y: 8 }}
            animate={{ opacity: 1, rotate: -3, y: 0 }}
            className='text-[1.9rem] text-ink'
            style={hand}
          >
            psst… &ldquo;no&rdquo; isn&apos;t really an option ;)
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

// Page --------------------------------------------------------------------------

const Invite: React.FC = () => {
  const [step, setStep] = useState<Step>('ask')
  const [form, setForm] = useState<InviteForm>(emptyInvite)
  const [replyUrl, setReplyUrl] = useState('')
  const [copied, setCopied] = useState(false)
  const [canShare, setCanShare] = useState(false)
  const today = useMemo(localToday, [])
  const latest = addDays(today, MAX_DAYS_AHEAD - 1)
  const now = new Date()
  const nowTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`
  const tooFar = form.date !== '' && form.date > latest
  // A past date, or a time earlier today that has already gone by
  const inPast = form.date !== '' && (form.date < today || (form.date === today && form.time !== '' && form.time <= nowTime))
  // Next refuses to be clicked (runs away like No) while the chosen moment is off-limits
  const badWhen = tooFar || inPast
  const shyNext = useShyButton()
  // Once the date/time is fine again, Next returns home and behaves
  useEffect(() => { if (!badWhen) shyNext.reset() }, [badWhen])

  const weekDays = Array.from({ length: MAX_DAYS_AHEAD }, (_, i) => {
    const iso = addDays(today, i)
    const [y, m, d] = iso.split('-').map(Number)
    const label = i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : new Date(y, m - 1, d).toLocaleDateString(undefined, { weekday: 'short', day: 'numeric' })
    return { iso, label }
  })

  useEffect(() => {
    setForm((f) => ({ ...f, timezone: Intl.DateTimeFormat().resolvedOptions().timeZone }))
    setCanShare(typeof navigator.share === 'function')
  }, [])

  const set = <K extends keyof InviteForm>(key: K, value: InviteForm[K]): void => {
    setForm((f) => ({ ...f, [key]: value }))
  }

  const requirements = inviteRequirements(form, today, nowTime)
  const stepReady = (s: InviteStep): boolean => requirements.filter((r) => r.step === s).every((r) => r.met)
  const missing = requirements.filter((r) => !r.met)
  const stepIndex = steps.indexOf(step as InviteStep)

  const makeLink = (): void => {
    if (missing.length > 0) return
    setReplyUrl(`${window.location.origin}/invite/reply?r=${encodeInvite(form)}`)
    setStep('done')
  }

  const copyLink = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(replyUrl)
    } catch {
      // Older browsers / insecure origins: fall back to selecting the text
      const input = document.getElementById('reply-url') as HTMLInputElement | null
      input?.select()
      document.execCommand('copy')
    }
    setCopied(true)
    setTimeout(() => { setCopied(false) }, 2200)
  }

  const shareLink = async (): Promise<void> => {
    try {
      await navigator.share({ title: 'My reply to Mark', text: `Hey Mark, I'm free! Here's my reply:`, url: replyUrl })
    } catch {
      // Share sheet dismissed; nothing to do
    }
  }

  const formatOptions: Array<{ value: Exclude<MeetingFormat, ''>, emoji: string, hint: string, color: string }> = [
    { value: 'phone', emoji: '📞', hint: 'just talk', color: 'bg-[#FF6B9D]' },
    { value: 'video', emoji: '💻', hint: 'face to face, from anywhere', color: 'bg-[#3A86FF]' },
    { value: 'in-person', emoji: '☕', hint: 'coffee, food, a walk…', color: 'bg-[#2EC4B6]' }
  ]

  const heading = (title: string, note: string): React.ReactNode => (
    <div className='mb-8'>
      <h2 className='text-[2.3rem] leading-[1] text-ink sm:text-[3.2rem]' style={display}>{title}</h2>
      <p className='mt-2 text-[1.7rem] text-ink/80' style={hand}>{note}</p>
    </div>
  )

  return (
    <>
      <ZineHead title='You&apos;re invited · Mark Cueva' />

      <div className='relative min-h-screen w-full overflow-hidden bg-sun text-ink' style={bodyFont}>
        <Collage />

        {/* Top bar */}
        <header className='relative z-20 flex items-center justify-between px-5 pt-5 sm:px-10 sm:pt-8'>
          <span />
          {stepIndex >= 0 && (
            <ol className='flex items-center gap-2 sm:gap-3'>
              {steps.map((s, i) => (
                <li
                  key={s}
                  className={`flex items-center gap-1.5 border-[2.5px] border-ink px-2.5 py-1 text-xs font-bold uppercase tracking-wider transition-all sm:text-sm ${i < stepIndex ? 'bg-ink text-sun' : i === stepIndex ? '-rotate-2 bg-paper text-ink shadow-[3px_3px_0_#7E31F1]' : 'bg-transparent text-ink/50'}`}
                >
                  <span style={display}>{String(i + 1).padStart(2, '0')}</span>
                  <span className='hidden sm:inline'>{stepNames[s]}</span>
                  {i < stepIndex && <span>✓</span>}
                </li>
              ))}
            </ol>
          )}
        </header>

        <main className='relative z-10 flex min-h-[calc(100vh-5rem)] items-center px-5 py-10 sm:px-10 lg:px-[8vw]'>
          <AnimatePresence mode='wait'>
            <motion.section
              key={step}
              initial={{ opacity: 0, y: 40, rotate: -1.5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, y: -30, rotate: 1.5 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className='w-full max-w-2xl'
            >
              {step === 'ask' && <AskStep onYes={() => { setStep('when') }} />}

              {step === 'when' && (
                <div>
                  {heading('YAY! When works?', 'pick a day this week & a time you\'re comfy with')}
                  <div className='mb-5 flex flex-wrap gap-3'>
                    {weekDays.map((day) => (
                      <button key={day.iso} type='button' onClick={() => { set('date', day.iso) }} className={chipCls(form.date === day.iso)}>{day.label}</button>
                    ))}
                  </div>
                  <div className='grid gap-5 sm:grid-cols-2'>
                    <div>
                      <Label htmlFor='date'>Date</Label>
                      <input id='date' type='date' min={today} value={form.date} onChange={(e) => { set('date', e.target.value) }} className={inputCls} />
                    </div>
                    <div>
                      <Label htmlFor='time'>Time</Label>
                      <input id='time' type='time' value={form.time} onChange={(e) => { set('time', e.target.value) }} className={inputCls} />
                    </div>
                  </div>
                  <div className='mt-5 flex flex-wrap gap-3'>
                    {quickTimes.map((t) => (
                      <button key={t.value} type='button' onClick={() => { set('time', t.value) }} className={chipCls(form.time === t.value)}>{t.label}</button>
                    ))}
                  </div>
                  <AnimatePresence>
                    {badWhen && (
                      <motion.p
                        key={tooFar ? 'far' : 'past'}
                        initial={{ opacity: 0, rotate: -5, y: 6 }}
                        animate={{ opacity: 1, rotate: -2, y: 0 }}
                        exit={{ opacity: 0 }}
                        className='mt-5 text-[1.8rem] leading-tight text-ink'
                        style={hand}
                      >
                        {tooFar ? 'whoa, that\'s too far away! pick a day this week ;)' : 'oops, that time already passed! pick a later one ;)'}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <p className='mt-5 text-sm font-medium text-ink/70'>
                    Times are in your timezone ({form.timezone !== '' ? form.timezone : 'detecting…'}). Mark is in the Philippines (UTC+8).
                  </p>
                </div>
              )}

              {step === 'how' && (
                <div>
                  {heading('How do you wanna hang?', 'whatever feels most comfy')}
                  <div className='grid gap-4 sm:grid-cols-3'>
                    {formatOptions.map((o, i) => {
                      const active = form.format === o.value
                      return (
                        <motion.button
                          key={o.value}
                          type='button'
                          onClick={() => { set('format', o.value) }}
                          whileHover={{ y: -4, rotate: i === 1 ? 1 : -1.5 }}
                          whileTap={{ scale: 0.97 }}
                          className={`relative border-[2.5px] border-ink p-5 text-left transition-shadow ${active ? `${o.color} shadow-[6px_6px_0_#111]` : 'bg-paper shadow-[4px_4px_0_#111]'}`}
                        >
                          {active && <Tape className='-top-3 left-1/2 w-16 -translate-x-1/2 rotate-2' />}
                          <div className='mb-3 text-4xl'>{o.emoji}</div>
                          <div className='text-lg text-ink' style={display}>{formatLabels[o.value]}</div>
                          <div className='text-xl text-ink/75' style={hand}>{o.hint}</div>
                        </motion.button>
                      )
                    })}
                  </div>

                  <AnimatePresence mode='wait'>
                    {form.format === 'phone' && (
                      <motion.div key='phone' initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className='mt-7'>
                        <Label htmlFor='phone'>Your phone number</Label>
                        <input id='phone' type='tel' autoComplete='tel' placeholder='+63 912 345 6789' value={form.phone} onChange={(e) => { set('phone', e.target.value) }} className={inputCls} />
                      </motion.div>
                    )}
                    {form.format === 'video' && (
                      <motion.div key='video' initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className='mt-7'>
                        <Label>Which app?</Label>
                        <div className='flex flex-wrap gap-3'>
                          {platforms.map((p) => (
                            <button key={p} type='button' onClick={() => { set('platform', p) }} className={chipCls(form.platform === p)}>{p}</button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                    {form.format === 'in-person' && (
                      <motion.div key='in-person' initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className='mt-7'>
                        <Label htmlFor='location'>Where should we go?</Label>
                        <input id='location' placeholder='Anywhere you like' value={form.location} onChange={(e) => { set('location', e.target.value) }} className={inputCls} />
                        <div className='mt-4 flex flex-wrap gap-3'>
                          {placeIdeas.map((p) => (
                            <button key={p} type='button' onClick={() => { set('location', p) }} className={chipCls(form.location === p)}>{p}</button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {step === 'you' && (
                <div>
                  {heading('Who\'s this?', 'so Mark knows who he\'s hanging out with')}
                  <div className='max-w-sm'>
                    <Label htmlFor='name'>Name</Label>
                    <input id='name' autoComplete='name' value={form.name} onChange={(e) => { set('name', e.target.value) }} className={inputCls} />
                  </div>
                  <div className='mt-5'>
                    <Label htmlFor='purpose'>What&apos;s the plan?</Label>
                    <textarea
                      id='purpose'
                      rows={4}
                      placeholder='Anything goes… tell Mark in your own words'
                      value={form.purpose}
                      onChange={(e) => { set('purpose', e.target.value) }}
                      className={inputCls}
                    />
                  </div>

                  {/* Requirement checklist, styled like a taped note */}
                  <div className='relative mt-8 rotate-[-0.6deg] border-[2.5px] border-ink bg-paper p-5 shadow-[6px_6px_0_#111]'>
                    <Tape className='-top-3.5 right-8 rotate-3' />
                    <p className='mb-3 text-2xl text-ink' style={hand}>before you get your link…</p>
                    <ul className='grid gap-2 sm:grid-cols-2'>
                      {requirements.map((r) => (
                        <li key={r.key} className={`flex items-center gap-2.5 text-sm font-medium ${r.met ? 'text-ink' : 'text-ink/55'}`}>
                          <span className={`flex h-5 w-5 shrink-0 items-center justify-center border-2 border-ink text-xs font-bold transition-all ${r.met ? 'rotate-[-8deg] bg-[#2EC4B6]' : 'bg-transparent'}`}>
                            {r.met ? '✓' : ''}
                          </span>
                          <span className={r.met ? 'line-through decoration-[#7E31F1] decoration-2' : ''}>{r.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {step === 'done' && (
                <div>
                  <motion.div
                    initial={{ scale: 0, rotate: -40 }}
                    animate={{ scale: 1, rotate: -8 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                    className='mb-6 inline-block border-[2.5px] border-ink bg-paper px-5 py-3 text-6xl shadow-[6px_6px_0_#111]'
                  >
                    💌
                  </motion.div>
                  <h2 className='text-[2.4rem] leading-[1] text-ink sm:text-[3.4rem]' style={display}>Last step: send it to Mark!</h2>
                  <p className='mt-4 max-w-lg text-[1.15rem] font-medium text-ink/80'>
                    Thanks, {form.name.trim().split(' ')[0]}! Your answers are packed into this link. Send it to Mark in any chat and he&apos;ll see your reply.
                  </p>

                  <div className='relative mt-8 max-w-xl'>
                    <Tape className='-top-3.5 left-6 -rotate-3' />
                    <input
                      id='reply-url'
                      readOnly
                      value={replyUrl}
                      onFocus={(e) => { e.currentTarget.select() }}
                      className={`${inputCls} truncate pr-4 font-mono text-sm`}
                      aria-label='Your reply link'
                    />
                  </div>

                  <div className='mt-6 flex flex-wrap items-center gap-4'>
                    <button type='button' onClick={() => { void copyLink() }} className={inkBtn}>
                      {copied ? 'Copied! ✓' : 'Copy link'}
                    </button>
                    {canShare && (
                      <button
                        type='button'
                        onClick={() => { void shareLink() }}
                        className='border-[2.5px] border-ink bg-paper px-7 py-3.5 text-base font-bold text-ink shadow-[5px_5px_0_#111] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none'
                      >
                        Share ↗
                      </button>
                    )}
                    <a href={replyUrl} target='_blank' rel='noreferrer' className='border-b-[2.5px] border-ink pb-0.5 font-bold text-ink hover:opacity-70'>
                      peek at it
                    </a>
                  </div>
                  <p className='mt-6 text-[1.7rem] text-ink' style={hand}>see you soon ✌</p>
                </div>
              )}

              {/* Step navigation */}
              {stepIndex >= 0 && (
                <div className='mt-10 flex items-center gap-4'>
                  <button
                    type='button'
                    onClick={() => { setStep(stepIndex === 0 ? 'ask' : steps[stepIndex - 1]) }}
                    className='border-b-[2.5px] border-ink pb-0.5 text-base font-bold text-ink transition-opacity hover:opacity-70'
                  >
                    ← back
                  </button>
                  {step !== 'you'
                    ? (
                      <motion.button
                        ref={shyNext.ref}
                        type='button'
                        // A too-far date keeps Next "enabled" but it runs away instead
                        disabled={!badWhen && !stepReady(step as InviteStep)}
                        onClick={() => { setStep(steps[stepIndex + 1]) }}
                        {...(step === 'when' && badWhen ? shyNext.handlers : {})}
                        animate={{ x: shyNext.offset.x, y: shyNext.offset.y, rotate: shyNext.dodges === 0 ? 0 : (shyNext.dodges % 2 === 0 ? -6 : 5) }}
                        whileTap={badWhen ? undefined : { scale: 0.94 }}
                        transition={{ type: 'spring', stiffness: 520, damping: 20 }}
                        className={`relative z-50 ${inkBtnMotion}`}
                      >
                        {step === 'when' && badWhen && shyNext.dodges > 0 ? (tooFar ? ['Nope!', 'Too far!', 'This week pls', 'Catch me!'] : ['Nope!', 'Too late!', 'Time travel?', 'Catch me!'])[shyNext.dodges % 4] : 'Next →'}
                      </motion.button>
                      )
                    : (
                      <button type='button' disabled={missing.length > 0} onClick={makeLink} className={inkBtn}>
                        {missing.length > 0 ? `${missing.length} more to go` : 'Get my reply link ✦'}
                      </button>
                      )}
                </div>
              )}
            </motion.section>
          </AnimatePresence>
        </main>
      </div>
    </>
  )
}

export default Invite
