import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Collage, Squiggle, Star, Tape, ZineHead, bodyFont, display, hand, inkBtn } from '@/components/invite/zine'
import { MARK_TIMEZONE, calendarLink, decodeInvite, formatLabels, zonedToUtc, type InviteForm } from '@/lib/invite'

// Shows a reply that a visitor built on /invite. Everything comes from the ?r= link itself.

const formatEmoji = { phone: '📞', video: '💻', 'in-person': '☕' }

const whenText = (instant: Date, timeZone: string): string => {
  try {
    return instant.toLocaleString('en-US', { timeZone, weekday: 'long', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })
  } catch {
    return instant.toUTCString()
  }
}

const Row: React.FC<{ label: string, children: React.ReactNode, rotate?: string }> = ({ label, children, rotate = '' }) => (
  <div className={`border-b-[2.5px] border-dashed border-ink/30 py-5 last:border-b-0 ${rotate}`}>
    <p className='mb-1 text-xs font-bold uppercase tracking-[0.25em] text-ink/60'>{label}</p>
    {children}
  </div>
)

const Reply: React.FC = () => {
  const [reply, setReply] = useState<InviteForm | null | undefined>(undefined)

  // Read ?r= straight from the address bar on mount (no need to wait for the router)
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('r') ?? ''
    setReply(code !== '' ? decodeInvite(code) : null)
  }, [])

  const instant = reply != null ? zonedToUtc(reply.date, reply.time, reply.timezone !== '' ? reply.timezone : MARK_TIMEZONE) : null
  const theirZone = reply?.timezone !== '' && reply?.timezone != null ? reply.timezone : MARK_TIMEZONE
  const sameZone = instant != null && whenText(instant, theirZone) === whenText(instant, MARK_TIMEZONE)

  return (
    <>
      <ZineHead title={reply != null ? `${reply.name} is free! · Reply` : 'Invite reply'} />

      <div className='relative min-h-screen w-full overflow-hidden bg-sun text-ink' style={bodyFont}>
        <Collage />

        <main className='relative z-10 flex min-h-screen items-center px-5 py-12 sm:px-10 lg:px-[8vw]'>
          {reply === undefined && <p className='text-3xl' style={hand}>opening your reply…</p>}

          {reply === null && (
            <div className='max-w-xl'>
              <h1 className='text-[2.6rem] leading-[1] sm:text-[3.6rem]' style={display}>Hmm, this link looks broken</h1>
              <p className='mt-4 text-[1.15rem] font-medium text-ink/80'>
                Part of it may have been cut off when it was copied. Ask for the full link again.
              </p>
            </div>
          )}

          {reply != null && instant != null && (
            <motion.section
              initial={{ opacity: 0, y: 40, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className='w-full max-w-2xl'
            >
              <div className='mb-5 inline-block -rotate-2 border-[2.5px] border-ink bg-paper px-4 py-1.5 text-sm font-bold uppercase tracking-[0.25em] shadow-[4px_4px_0_#111]'>
                ✦ Invite reply
              </div>
              <h1 className='text-[2.8rem] leading-[0.95] sm:text-[4.2rem] lg:text-[5rem]' style={display}>
                {reply.name} said <span className='relative inline-block'>
                  YES!
                  <Squiggle className='absolute -bottom-3 left-0 w-full' />
                </span>
              </h1>

              {/* The reply, as a taped ticket */}
              <div className='relative mt-10 rotate-[-0.8deg] border-[2.5px] border-ink bg-paper px-6 py-2 shadow-[8px_8px_0_#111] sm:px-8'>
                <Tape className='-top-3.5 left-8 -rotate-3' />
                <Tape className='-top-3.5 right-8 rotate-6' />
                <Star className='absolute -right-5 -top-5 h-10 w-10 text-[#FF6B9D]' />

                <Row label='When'>
                  <p className='text-[1.5rem] leading-tight sm:text-[1.8rem]' style={display}>{whenText(instant, theirZone)}</p>
                  {!sameZone && (
                    <p className='mt-1 text-[1.5rem] text-[#7E31F1]' style={hand}>
                      that&apos;s {whenText(instant, MARK_TIMEZONE)} in Cebu
                    </p>
                  )}
                </Row>

                {reply.format !== '' && (
                  <Row label='How'>
                    <p className='text-[1.5rem] leading-tight sm:text-[1.8rem]' style={display}>
                      {formatEmoji[reply.format]} {formatLabels[reply.format]}
                    </p>
                    <p className='mt-1 text-[1.1rem] font-medium'>
                      {reply.format === 'phone' && <a href={`tel:${reply.phone.replace(/[^\d+]/g, '')}`} className='underline decoration-[#7E31F1] decoration-2 underline-offset-4'>{reply.phone}</a>}
                      {reply.format === 'video' && <>on {reply.platform}</>}
                      {reply.format === 'in-person' && (
                        <a href={`https://www.google.com/maps/search/${encodeURIComponent(reply.location)}`} target='_blank' rel='noreferrer' className='underline decoration-[#7E31F1] decoration-2 underline-offset-4'>
                          {reply.location}
                        </a>
                      )}
                    </p>
                  </Row>
                )}

                <Row label='The plan'>
                  <p className='whitespace-pre-wrap text-[1.9rem] leading-snug' style={hand}>&ldquo;{reply.purpose}&rdquo;</p>
                </Row>
              </div>

              <div className='mt-10 flex flex-wrap items-center gap-4'>
                <a href={calendarLink(reply)} target='_blank' rel='noreferrer' className={`inline-block ${inkBtn}`}>
                  Add to Google Calendar
                </a>
                {reply.format === 'phone' && (
                  <a
                    href={`tel:${reply.phone.replace(/[^\d+]/g, '')}`}
                    className='border-[2.5px] border-ink bg-paper px-7 py-3.5 text-base font-bold shadow-[5px_5px_0_#111] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5'
                  >
                    Call {reply.name.split(' ')[0]}
                  </a>
                )}
              </div>
            </motion.section>
          )}
        </main>
      </div>
    </>
  )
}

export default Reply
