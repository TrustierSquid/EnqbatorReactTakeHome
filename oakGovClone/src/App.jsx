import './styles/navbar.scss'
import './styles/index.scss'
import './styles/hero.scss'
import Greeting from './coreComponents/Greeting'
import NavBar from './ContentComponents/NavBar'
import Hero from './ContentComponents/Hero'
import SideLinks from './ContentComponents/SideLinks'

function App() {

  return (
    <>
      <Greeting>
        <NavBar></NavBar>
        <SideLinks></SideLinks>
        <Hero></Hero>
      </Greeting>
    </>
  )
}

export default App
