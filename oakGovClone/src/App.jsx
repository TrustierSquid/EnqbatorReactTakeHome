import './styles/navbar.scss'
import './styles/index.scss'
import './styles/hero.scss'
import './styles/contentSection.scss'
import './styles/footer.scss'
import './styles/businessComponent.scss'

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
import Information from './coreComponents/Information'

 import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar></NavBar>

      {/* with flex, the main element grows to fill all remaining space between the navbar and footer  */}
      <main style={{flex: 1}}>
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
            </Greeting>
          }/>

          {/* Renders based on what nav link was accessed */}
          <Route path='/business' element={
            <Greeting>
              <Information />
            </Greeting>
            }/>
          <Route path='/community' element={<Greeting><Information /></Greeting>} />
          <Route path='/government' element={<Greeting><Information /></Greeting>} />

        </Routes>
      </main>

      <Footer></Footer>
    </BrowserRouter>


    </>
  )
}

export default App
