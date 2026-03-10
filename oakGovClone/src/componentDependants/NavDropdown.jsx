



export default function NavDropdown({topic, updateTopicState}) {
  return (
    <nav className={topic ? 'dropdown' : 'hideDropdown'} onMouseLeave={() => updateTopicState(null)}>
      {
        topic === 'business' ? (
          <>
            <span className="dropdownColumn">
              <h4>Economic Development</h4>
              <p><a href="#">Site Selection</a></p>
              <p><a href="#">Events Calendar</a></p>
              <p><a href="#">Economic Development News</a></p>
              <p><a href="#">Programs</a></p>
            </span>
            <span className="dropdownColumn">
              <h4>Business Development</h4>
              <p><a href="#">Business Loan</a></p>
              <p><a href="#">Oakland County Tech Collaboration</a></p>
              <p><a href="#">Economic Outlook</a></p>
              <p><a href="#">Emerging Growth & Innovation (EGI)</a></p>
              <p><a href="#">International</a></p>
              <p><a href="#">Site Selection</a></p>
              <p><a href="#">Project Diamond</a></p>
            </span>
            <span className="dropdownColumn">
              <h4>Workforce Development</h4>
              <p><a href="#">Job Seekers</a></p>
              <p><a href="#">Employers</a></p>
              <p><a href="#">Youth</a></p>
              <p><a href="#">Education & Training</a></p>
              <p><a href="#">Programs</a></p>
              <p><a href="#">Oakland80</a></p>
            </span>
          </>
        ) : topic === 'community' ? (
          <>
            <span className="dropdownColumn">
              <h4>Parks & Recreation</h4>
              <p><a href="#">Oakland County Parks</a></p>
              <p><a href="#">Golf Courses</a></p>
              <p><a href="#">Waterparks</a></p>
              <p><a href="#">Dog Parks</a></p>
              <p><a href="#">Nature Centers</a></p>
              <p><a href="#">Campgrounds</a></p>
            </span>
            <span className="dropdownColumn">
              <h4>Health & Human Services</h4>
              <p><a href="#">Health Division</a></p>
              <p><a href="#">Children's Village</a></p>
              <p><a href="#">Community Mental Health</a></p>
              <p><a href="#">Veterans' Services</a></p>
              <p><a href="#">Senior Services</a></p>
              <p><a href="#">Animal Shelter</a></p>
            </span>
            <span className="dropdownColumn">
              <h4>Community Programs</h4>
              <p><a href="#">Volunteer Opportunities</a></p>
              <p><a href="#">Community Events</a></p>
              <p><a href="#">Libraries</a></p>
              <p><a href="#">Art & Culture</a></p>
              <p><a href="#">Sustainability</a></p>
            </span>
          </>
        ) : topic === 'government' ? (
          <>
            <span className="dropdownColumn">
              <h4>County Executive</h4>
              <p><a href="#">About the Executive</a></p>
              <p><a href="#">Executive Office Staff</a></p>
              <p><a href="#">State of the County</a></p>
              <p><a href="#">Executive Orders</a></p>
              <p><a href="#">Press Releases</a></p>
            </span>
            <span className="dropdownColumn">
              <h4>Board of Commissioners</h4>
              <p><a href="#">Find Your Commissioner</a></p>
              <p><a href="#">Meeting Schedule</a></p>
              <p><a href="#">Agendas & Minutes</a></p>
              <p><a href="#">Watch Meetings</a></p>
              <p><a href="#">Committees</a></p>
            </span>
            <span className="dropdownColumn">
              <h4>Departments</h4>
              <p><a href="#">Department Directory</a></p>
              <p><a href="#">Circuit Court</a></p>
              <p><a href="#">Clerk / Register of Deeds</a></p>
              <p><a href="#">Corporation Counsel</a></p>
              <p><a href="#">Fiscal Services</a></p>
              <p><a href="#">Human Resources</a></p>
              <p><a href="#">Treasurer</a></p>
            </span>
          </>
        ) : null
      }
    </nav>
  )
}
