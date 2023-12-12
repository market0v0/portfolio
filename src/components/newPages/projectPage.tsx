import Portfolio from './portfolio'
import Projects from './projects'

const ProjectPage: React.FC = () => {
  return (

          <div id='projects'>
               <div className='block xl:hidden'>
          <Projects />
          </div>
          <div className='xl:block hidden'>
          <Portfolio/>
          </div>
          </div>
  )
}

export default ProjectPage
