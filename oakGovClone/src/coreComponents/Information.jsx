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
                </div>
              </>
            ) : location.pathname === '/government' ? (
              <>
                <div id="informationContent">
                  <h1>Government</h1>
                </div>
              </>
            ) : null
          }
        </div>
      </main>
    </>
  )
}