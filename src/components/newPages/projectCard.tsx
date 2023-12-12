/* eslint-disable react/prop-types */
import { type ProjectData } from '@/pages/api/data'
import AnimatedSection from '../PageAnimation'
import BubbleText from '../bubble'

const ProjectCard: React.FC<ProjectData> = (projectSpec) => {
  return (
    <AnimatedSection>
    <div
      className='flex min-h-[25rem]  min-w-[10rem] flex-col items-center justify-start  rounded-xl border-2 border-slate-900 bg-bgcolor p-4  backdrop-blur-sm '
      id='skills'
    >
            <div className='flex flex-col items-start gap-6 rounded-xl border-2 border-slate-900 bg-bgcolor p-4 text-white backdrop-blur-sm'>
        <div className=' rounded-md bg-secondary px-2 text-[2rem] font-[450] text-primary'>
          <BubbleText text={projectSpec.title} />
        </div>
        <div
          className=' leading-[1.4rem] tracking-[0.02rem]
         sm:py-8 sm:leading-[2rem]'
        >
          {projectSpec.desc}
        </div>
        <div className='flex   '>
          <span>
            <img src='/github.svg' alt='icon' width='20' height='100%' />
          </span>
          <span className=' text-primary '>
            <a href={projectSpec.repository} target='_blank' rel='noreferrer'>
              VIEW REPOSITORY
            </a>
          </span>
        </div>
        <div>{projectSpec.tech}</div>
      </div>

    </div>
    </AnimatedSection>
  )
}

export default ProjectCard
