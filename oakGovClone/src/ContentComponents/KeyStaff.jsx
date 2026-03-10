import {useState} from 'react'

export default function KeyStaff() {
  const totalSlides = 3

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
            id="davidCoulterImg"
            src="/src/assets/imgs/davidCoulter.png"
            alt="Key Staff"
          />
          <div id="keyStaffTextContainer">
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
            id="davidCoulterImg"
            src="/src/assets/imgs/davidCoulter.png"
            alt="Key Staff"
          />
          <div id="keyStaffTextContainer">
            <article className="keyStaffCarouselItemContent">
              <span>County Executive David Coulter</span>
              <h1>Putting our core values to work</h1>
              <p>
                In Oakland County, leadership is about public service, not politics.
                It’s a place where we meet challenges with innovation and where
                disruption leads to progress, not division. We know our strength
                comes from unity and collaboration and that we can do even more good
                together. 1
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
            id="davidCoulterImg"
            src="/src/assets/imgs/davidCoulter.png"
            alt="Key Staff"
          />
          <div id="keyStaffTextContainer">
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
      </div>

      <nav id='carouselButtonContainer'>
        <button className='keyStaffCarouselButtons' onClick={previousSlide}>⬅️</button>
        <button className='keyStaffCarouselButtons' onClick={nextSlide}>➡️</button>
      </nav>
    </section>
  );
}
