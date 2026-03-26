
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import Aboutmain from '../components/Aboutmain'
import SeasonSection from '../components/SeasonSection'
import RecentWork from '../components/Recentwork'
import Work2 from '../components/Work2'
import PortfolioCarousel from '../components/Carousal'


const Home = () => {
  return (
    <div>
      <Aboutmain />
      <ProjectsSection />
      <PortfolioCarousel />
            <SkillsSection />
      <SeasonSection />
      <Work2 />
      <RecentWork />
    </div>
  )
}

export default Home
