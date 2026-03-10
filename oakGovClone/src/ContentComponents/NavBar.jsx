import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import NavDropdown from "../componentDependants/NavDropdown";

export default function NavBar() {
  const location = useLocation();
  const isSubPage = location.pathname !== '/';

  // Keeping track of the scroll position to determine whether to show the mobile nav or not
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [dropdownTopic, setDropdownTopic] = useState("")

  
  return (
    <div id="navWrapper" style={isSubPage ? { backgroundColor: '#007A52'} : {}}>
    {/* This navbar appears when the user scrolls past the hero. */}
      <div
        id="trackingNavbar"
        className={scrollY > 120 ? "trackingNavbarFunctionality" : "notVisible"}
      >
        <h2>OMC</h2>
        <ul>
          <li className="headerLink">Business</li>
          <li className="headerLink">Community</li>
          <li className="headerLink">Government</li>
          <button id="trackingFindServiceBtn">Find Service</button>
        </ul>
      </div>

      <nav id="navContainer" className={isSubPage ? 'subPageNav' : ''}>
        {/* Very Top Navbar */}
        <div id="subNavBarComponent">
          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li aria-label="Cart">
              <a href="#">&#128722;</a>
            </li>
          </ul>
        </div>

        <div id="navBarComponent">
          <a href="#" id="homeAnchorTag">
            <span>Oakland County MI</span>
            <div id="homeAnchorTagInfo">
              <p>David Coulter</p>
              <p>Oakland County Executive</p>
            </div>
          </a>

          <header id="headerNavLinks">
            <ul>
              <Link className="headerLink" to='/business' onMouseOver={()=> setDropdownTopic('business')}>
                Business
              </Link>
              <Link className="headerLink" to='/community'  onMouseOver={()=> setDropdownTopic('community')}>
                Community
              </Link>
              <Link className="headerLink" to='/government' onMouseOver={()=> setDropdownTopic('government')}>
                Government
              </Link>

              <NavDropdown topic={dropdownTopic} updateTopicState={setDropdownTopic}/>

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
              <input id="mobileNavSearchBar" type="text" placeholder="Search" />
            </form>
          </div>
          <div className="mobileNavLayer">
            <p>Find Service</p>
          </div>
        </div>
      </nav>
    </div>
  );
}
