

export default function NavBar(){
  return (
    <nav id="navContainer">
      <div id="subNavBarComponent">
        <ul>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">News</a></li>
          <li aria-label="Cart"><a href="#">&#128722;</a></li>
        </ul>
      </div>

      <div id="navBarComponent">        
        <a href="#" id="homeAnchorTag">
          <div id="homeAnchorTagInfo">
            <p>David Coulter</p>
            <p>Oakland County Executive</p>
          </div>
        </a>

        <header id="headerNavLinks">
          <ul>
            <li className="headerLink">Business</li>
            <li className="headerLink">Community</li>
            <li className="headerLink">Government</li>
            <button id="findServiceBtn">Find Service</button>
            <button id="mobileNavBtn">&#9776;</button>
          </ul>
        </header>
      </div>


      <div id="mobileNavContainer">
        <div className="mobileNavLayer">
          <h4>Oakland County Michigan</h4>
          <button id="mobileNavBtn">&#9776;</button>
        </div>
        <div className="mobileNavLayer">
          <form>
            <input id="mobileNavSearchBar" type="text" placeholder="Search"/>
          </form>
        </div>
        <div className="mobileNavLayer">
          <p>Find Service</p>
        </div>
      </div>
    </nav>
  )
}