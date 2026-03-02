import './styles/navbar.scss'
import './styles/index.scss'
import './styles/hero.scss'
import './styles/contentSection.scss'
import './styles/footer.scss'

import Greeting from './coreComponents/Greeting'
import NavBar from './ContentComponents/NavBar'
import Hero from './ContentComponents/Hero'
import SideLinks from './ContentComponents/SideLinks'
import KeyStaff from './ContentComponents/KeyStaff'
import Options from './ContentComponents/Options'
import News from './ContentComponents/News'
import CalendarOfEvents from './ContentComponents/CalendarOfEvents'
import CountyLeaders from './ContentComponents/CountyLeaders'
import BlogsVideos from './ContentComponents/BlogsVideos'
import Stats from './ContentComponents/Stats'
import Footer from './ContentComponents/Footer'

function App() {

  return (
    <>
      <Greeting>
        <NavBar></NavBar>
        <SideLinks></SideLinks>
        <Hero></Hero>

        {/* Content Components */}
        <KeyStaff></KeyStaff>
        <Options></Options>
        <News></News>
        <CalendarOfEvents></CalendarOfEvents>
        <CountyLeaders></CountyLeaders>
        <BlogsVideos></BlogsVideos>
        <Stats></Stats>
        <Footer></Footer>
        
        
        
      </Greeting>
    </>
  )
}

export default App
