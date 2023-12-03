/* eslint-disable react/prop-types */
import AnimatedSection from '../PageAnimation'

interface TrainingProps {
  img: string
  label: string
  date: string
  body: string
  images: string[]
}
const ProjectCard: React.FC<TrainingProps> = ({ label }) => {
  return (
    <AnimatedSection>
    <div
      className='flex min-h-[25rem]  min-w-[10rem] flex-col items-center justify-start  rounded-xl border-2 border-slate-900 bg-bgcolor p-4 opacity-70 backdrop-blur-sm hover:opacity-100'
      id='skills'
    >
      <span className='py-2'>{label}</span>
      <div
        className='h-[20rem] w-full rounded-sm '
        style={{
          backgroundImage: 'url($\'/pinewood.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      <span className='py-2 text-[.7rem]'></span>
      <span className='text-[.9rem]'>

      </span>

    </div>
    </AnimatedSection>
  )
}

export default ProjectCard
