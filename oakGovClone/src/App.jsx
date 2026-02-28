import './styles/index.scss'
import Greeting from './coreComponents/Greeting'
import NavBar from './ContentComponents/NavBar'
import Hero from './ContentComponents/Hero'

function App() {

  return (
    <>
      <Greeting>
        <NavBar></NavBar>
        <Hero>
          
        </Hero>
      </Greeting>
    </>
  )
}

export default App
