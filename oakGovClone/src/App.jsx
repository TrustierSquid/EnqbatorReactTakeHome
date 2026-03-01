import './styles/navbar.scss'
import './styles/index.scss'
import './styles/hero.scss'
import './styles/contentSection.scss'

import Greeting from './coreComponents/Greeting'
import NavBar from './ContentComponents/NavBar'
import Hero from './ContentComponents/Hero'
import SideLinks from './ContentComponents/SideLinks'
import KeyStaff from './ContentComponents/KeyStaff'
import Options from './ContentComponents/Options'
import News from './ContentComponents/News'
import CalendarOfEvents from './ContentComponents/CalendarOfEvents'
import CountyLeaders from './ContentComponents/CountyLeaders'


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
        
      </Greeting>
    </>
  )
}

export default App
