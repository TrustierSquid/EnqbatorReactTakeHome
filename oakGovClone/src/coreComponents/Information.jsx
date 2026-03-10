import { Link, useLocation } from 'react-router-dom';
import InformationSideNav from '../componentDependants/InformationSideNav';

export default function Information({children}){
  const location = useLocation()
  
  return (
    <>
      <main id="informationContainer">
        <div id='informationFlex'>
          <InformationSideNav/>
          
          {
            location.pathname === '/business' ? (
              <>
                <div id='informationContent'>
                  <h1>Business</h1>
                  <input type="text" id="informationSearchBar" placeholder='🔍 Search' />
                  <div id='informationTabs'>
                    <span className='informationTabItem'>Economic Development <span>➡️</span></span>
                    <span className='informationTabItem'>Business Development <span>➡️</span></span>
                    <span className='informationTabItem'>Workforce Development <span>➡️</span></span>
                  </div>
                </div>
              </>
            ) : location.pathname === '/community' ? (
              <>
                <div id="informationContent">
                  <h1>Community</h1>
                  <input type="text" id="informationSearchBar" placeholder='🔍 Search' />
                  <div id='informationTabs'>
                    <span className='informationTabItem'>Airports <span>➡️</span></span>
                    <span className='informationTabItem'>American Rescue Plan <span>➡️</span></span>
                    <span className='informationTabItem'>Community Development <span>➡️</span></span>
                    <span className='informationTabItem'>Dashboard <span>➡️</span></span>
                    <span className='informationTabItem'>Diversity, Equity & Inclusion <span>➡️</span></span>
                    <span className='informationTabItem'>Downtown Pontiac <span>➡️</span></span>
                    <span className='informationTabItem'>Emergency Management <span>➡️</span></span>
                    <span className='informationTabItem'>Health <span>➡️</span></span>
                    <span className='informationTabItem'>HIPAA <span>➡️</span></span>
                    <span className='informationTabItem'>Local Communities <span>➡️</span></span>
                    <span className='informationTabItem'>Neighborhood & Housing Development <span>➡️</span></span>
                    <span className='informationTabItem'>Oakland Cares <span>➡️</span></span>
                    <span className='informationTabItem'>Oakland Connects<span>➡️</span></span>
                    <span className='informationTabItem'>Oakland County Parks<span>➡️</span></span>
                    <span className='informationTabItem'>Older Adults<span>➡️</span></span>
                    <span className='informationTabItem'>Pet Adoption<span>➡️</span></span>
                    <span className='informationTabItem'>Oakland Transit<span>➡️</span></span>
                    <span className='informationTabItem'>Resources<span>➡️</span></span>
                    <span className='informationTabItem'>Roads<span>➡️</span></span>
                    <span className='informationTabItem'>Sustainabiliy<span>➡️</span></span>
                    <span className='informationTabItem'>Volunteer<span>➡️</span></span>
                    <span className='informationTabItem'>StudentD Debt Relief<span>➡️</span></span>
                  </div>
                </div>
              </>
            ) : location.pathname === '/government' ? (
              <>
                <div id="informationContent">
                  <h1>Government</h1>
                  <input type="text" id="informationSearchBar" placeholder='🔍 Search' />
                  <div id='informationTabs'>
                    <span className='informationTabItem'>About Oakland County<span>➡️</span></span>
                    <span className='informationTabItem'>Board of Commissioners<span>➡️</span></span>
                    <span className='informationTabItem'>Clerk/Register of Deeds<span>➡️</span></span>
                    <span className='informationTabItem'>County Executive<span>➡️</span></span>
                    <span className='informationTabItem'>Courts<span>➡️</span></span>
                    <span className='informationTabItem'>Facilities Management<span>➡️</span></span>
                    <span className='informationTabItem'>FOIA<span>➡️</span></span>
                    <span className='informationTabItem'>Historical Commission<span>➡️</span></span>
                    <span className='informationTabItem'>Honors & Awards<span>➡️</span></span>
                    <span className='informationTabItem'>Human Resources<span>➡️</span></span>
                    <span className='informationTabItem'>Oakland County Oakfit Wellness<span>➡️</span></span>
                    <span className='informationTabItem'>Indigent Defense Services<span>➡️</span></span>
                    <span className='informationTabItem'>Information Technology<span>➡️</span></span>
                    <span className='informationTabItem'>Investor Relations<span>➡️</span></span>
                    <span className='informationTabItem'>Management & Budget<span>➡️</span></span>
                    <span className='informationTabItem'>Medical Examiner<span>➡️</span></span>
                    <span className='informationTabItem'>Oakland County Children's Village<span>➡️</span></span>
                    <span className='informationTabItem'>Pay Taxes<span>➡️</span></span>
                    <span className='informationTabItem'>Pretrial & Justice Services<span>➡️</span></span>
                    <span className='informationTabItem'>Property Gateway<span>➡️</span></span>
                    <span className='informationTabItem'>Prosecutor<span>➡️</span></span>
                    <span className='informationTabItem'>Purchasing<span>➡️</span></span>
                    <span className='informationTabItem'>Roads<span>➡️</span></span>
                    <span className='informationTabItem'>Sheriff<span>➡️</span></span>
                    <span className='informationTabItem'>Survey Oakland<span>➡️</span></span>
                    <span className='informationTabItem'>Social<span>➡️</span></span>
                    <span className='informationTabItem'>Subscribe<span>➡️</span></span>
                    <span className='informationTabItem'>Oakland County Treasurer's Office<span>➡️</span></span>
                    <span className='informationTabItem'>Veterans<span>➡️</span></span>
                    <span className='informationTabItem'>Terms of Use<span>➡️</span></span>
                    <span className='informationTabItem'>Services<span>➡️</span></span>
                    <span className='informationTabItem'>News<span>➡️</span></span>
                    <span className='informationTabItem'>Oakland County Auctions<span>➡️</span></span>
                    <span className='informationTabItem'>Accessibility<span>➡️</span></span>
                    <span className='informationTabItem'>Contact Us<span>➡️</span></span>
                    <span className='informationTabItem'>Local Media Links<span>➡️</span></span>
                    <span className='informationTabItem'>Site Map<span>➡️</span></span>
                    <span className='informationTabItem'>Login Account and Password Help<span>➡️</span></span>
                    <span className='informationTabItem'>Water Resources Commissioner<span>➡️</span></span>
                    <span className='informationTabItem'>G2GCloud<span>➡️</span></span>
                    <span className='informationTabItem'>Account Help<span>➡️</span></span>
                  </div>
                </div>
              </>
            ) : null
          }
        </div>
      </main>
    </>
  )
}