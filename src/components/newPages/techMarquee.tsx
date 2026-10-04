import React from 'react'

const items: Array<{ name: string, icon?: string, highlight?: boolean }> = [
  { name: 'Next.js 15', icon: '/skills/next.svg' },
  { name: 'TypeScript', icon: '/skills/ts.svg' },
  { name: 'React', icon: '/skills/react.svg' },
  { name: 'tRPC' },
  { name: 'PostgreSQL' },
  { name: 'Prisma' },
  { name: 'NetSuite SuiteScript' },
  { name: 'Claude Code', icon: '/skills/claude.svg', highlight: true },
  { name: 'AI Agents', icon: '/skills/ai-agents.svg', highlight: true },
  { name: 'MCP', highlight: true },
  { name: 'Redis' },
  { name: 'Playwright' },
  { name: 'Spring Boot', icon: '/skills/spring.svg' },
  { name: 'Python', icon: '/skills/py.svg' },
  { name: 'MongoDB', icon: '/skills/mongo.svg' },
  { name: 'Git', icon: '/skills/git.svg' }
]

// Infinite, edge-faded strip of technologies. The list is rendered twice and
// translated by -50% so the loop is seamless. Pauses on hover.
const TechMarquee: React.FC = () => (
  <div className='marquee-mask group relative w-full overflow-hidden py-2' aria-label='Technologies I work with'>
    <div className='animate-marquee flex w-max gap-3 group-hover:[animation-play-state:paused]'>
      {[...items, ...items].map((item, i) => (
        <div
          key={`${item.name}-${i}`}
          aria-hidden={i >= items.length}
          className={`flex shrink-0 items-center gap-2 rounded-xl border px-4 py-2 text-sm backdrop-blur-xl transition-colors ${item.highlight === true ? 'border-primary/40 bg-gradient-to-r from-primary/20 to-purple-500/20 font-semibold text-primary' : 'border-light-border bg-white/50 text-light-text-secondary hover:border-primary/40 hover:text-primary dark:border-glass-border dark:bg-glass-bg dark:text-dark-text-secondary'}`}
        >
          {item.icon != null && <img src={item.icon} alt='' className='h-4 w-4 object-contain' />}
          {item.name}
        </div>
      ))}
    </div>
  </div>
)

export default TechMarquee
