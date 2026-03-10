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
import Socials from './ContentComponents/Socials'
import Business from './coreComponents/Business'

 import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar></NavBar>

      <Routes>
        <Route path='/' element={
          <Greeting>
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
            <Socials></Socials>
            <Footer></Footer>
          </Greeting>
        }/>

        <Route path='/business' element={
          <Greeting>
            <Business></Business>
          </Greeting>
        }/>

      </Routes>

    </BrowserRouter>


    </>
  )
}

export default App
