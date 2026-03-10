import {useState} from 'react'

export default function KeyStaff() {
  const totalSlides = 4

  // Slide in view
  const [currentIndex, setCurrentIndex] = useState(0)

  //  subtracting one by one if the index is 0 makes the index -1. + totalslides makes sure currentIndex never becomes a negative
  // % (modulo) Keeps the currentIndex in range of the totalslides
  const previousSlide = ()=> setCurrentIndex((i)=> (i - 1 + totalSlides) % totalSlides);
  const nextSlide = ()=> setCurrentIndex((i)=> (i + 1) % totalSlides);

  
  return (
    <section id="keyStaffContainer">


      {/* This class shifts the track to the left 100% per slide. Because each item is 100% width, one shift will move over to another card */}
      <div id="carouselTrack" style={{transform: `translateX(-${currentIndex * 100}%)`}}>
        {/* ITEM 1 */}
        <div className="keyStaffFlexContainer keyStaffCarouselItem">
          <img
            className="keyStaffImg"
            src="/src/assets/imgs/keyStaffComponentImgs/davidCoulter.png"
            alt="Key Staff"
          />
          <div className="keyStaffTextContainer">
            <article className="keyStaffCarouselItemContent">
              <span>County Executive David Coulter</span>
              <h1>Putting our core values to work</h1>
              <p>
                In Oakland County, leadership is about public service, not politics.
                It’s a place where we meet challenges with innovation and where
                disruption leads to progress, not division. We know our strength
                comes from unity and collaboration and that we can do even more good
                together.
              </p>
              <div id="keyStaffButtonContainer">
                <button>Learn More</button>
              </div>
            </article>
          </div>
        </div>

        {/* ITEM 2 */}
        <div className="keyStaffFlexContainer keyStaffCarouselItem">
          <img
            className="keyStaffImg"
            src="/src/assets/imgs/keyStaffComponentImgs/keyStaff2.png"
            alt="Key Staff"
          />
          <div className="keyStaffTextContainer">
            <article className="keyStaffCarouselItemContent">
              <span>Oakland County Equity Council</span>
              <h1>Diversity, Equity and Inclusion</h1>
              <p>
                A fundamental mission in Oakland County is to look at all of the programs and services we offer through a DEI lens to ensure there is equitable opportunity for all of our residents, businesses and employees. Internally, our best work happens when employees know that all voices are valued, respected and heard.
              </p>
              <div id="keyStaffButtonContainer">
                <button>Learn More</button>
              </div>
            </article>
          </div>
        </div>

        {/* ITEM 3 */}
        <div className="keyStaffFlexContainer keyStaffCarouselItem">
          <img
            className="keyStaffImg"
            src="/src/assets/imgs/keyStaffComponentImgs/keyStaff3.png"
            alt="Key Staff"
          />
          <div className="keyStaffTextContainer">
            <article className="keyStaffCarouselItemContent">
              <span>Economic, Social & Environmental Sustainability</span>
              <h1>Demonstrating Leadership in Sustainability</h1>
              <p>
                Sustainability encompasses so much of what makes Oakland County the place where nearly 1.3 million people choose to call home: Livable and safe neighborhoods; Clean Drinking Water; Hundreds of pristine parks and lakes; and the policies and programs that will help protect our environment for generations.
              </p>
              <div id="keyStaffButtonContainer">
                <button>Learn More</button>
              </div>
            </article>
          </div>
        </div>

        {/* ITEM 4 */}
        <div className="keyStaffFlexContainer keyStaffCarouselItem">
          <img
            className="keyStaffImg"
            src="/src/assets/imgs/keyStaffComponentImgs/keyStaff4.png"
            alt="Key Staff"
          />
          <div className="keyStaffTextContainer">
            <article className="keyStaffCarouselItemContent">
              <span>County Executive David Coulter</span>
              <h1>Putting our core values to work</h1>
              <p>
                In Oakland County, leadership is about public service, not politics.
                It’s a place where we meet challenges with innovation and where
                disruption leads to progress, not division. We know our strength
                comes from unity and collaboration and that we can do even more good
                together. 2
              </p>
              <div id="keyStaffButtonContainer">
                <button>Learn More</button>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* Visual indicator that tracks which slide you are on based on currentIndex state  */}
      <div id='indexTracker'>
        <span className={currentIndex === 0 ? `indexIndicator inView` : `indexIndicator`}></span>
        <span className={currentIndex === 1 ? `indexIndicator inView` : `indexIndicator`}></span>
        <span className={currentIndex === 2 ? `indexIndicator inView` : `indexIndicator`}></span>
        <span className={currentIndex === 3 ? `indexIndicator inView` : `indexIndicator`}></span>
      </div>

      <nav id='carouselButtonContainer'>
        <button className='keyStaffCarouselButtons' onClick={previousSlide}>⬅️</button>
        <button className='keyStaffCarouselButtons' onClick={nextSlide}>➡️</button>
      </nav>
    </section>
  );
}
