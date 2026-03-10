import {useState, useEffect} from 'react';

const getVisibleCount = ()=> {
  // Checks the window width and returns cards based on how wide the width is
  if (window.innerWidth >= 1108) return 3;
  if (window.innerWidth >= 768) return 2;
  return 1;
}

export default function Socials(){
  const totalSlides = 6

  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(getVisibleCount)

  useEffect(() => {

    // Setting the visible count initially on first render
    const handleResize = () => setVisibleCount(getVisibleCount());

    // Everytime you resize the browser, handleRisize will trigger again and update the state of the visible count 
    window.addEventListener('resize', handleResize);

    // This is clean up function. In the case of the component unmounts, it will remove the event listener. Prevents memory leak. 
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const previousSlide = ()=> setCurrentIndex((index)=> (index - 1 + totalSlides) % totalSlides);
  const nextSlide = ()=> setCurrentIndex((index)=> (index + 1 ) % totalSlides);

  return (
    <section id="socialsContainer">
      <h1>Connect with #OaklandCounty</h1>

      <div id="iframeContainer">
        {/* clone of the iframes from the original websites code. Wont load in localhost, but present for the sake of presentation of the take-home project. */}

        <article id="iframeCarouselTrack"  style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}>
          <div className="iframeItem">
            <iframe
              src="https://www.facebook.com/photo.php?fbid=1337914895037479&set=a.222505823245064&type=3&ref=embed_page"
              title="Test"
            ></iframe>
            <button>Learn More!</button>
          </div>

          <div className="iframeItem">
            <iframe
              src="https://www.facebook.com/photo.php?fbid=1337914895037479&set=a.222505823245064&type=3&ref=embed_page"
              title="Test"
            ></iframe>
            <button>Learn More!</button>
          </div>

          <div className="iframeItem">
            <iframe
              src="https://www.linkedin.com/feed/?trk=public_post_embed_linkedin-logo-image"
              title="Test"
            ></iframe>
            <button>Learn More!</button>
          </div>

          <div className="iframeItem">
            <iframe
              src="https://www.facebook.com/photo.php?fbid=1337914895037479&set=a.222505823245064&type=3&ref=embed_page"
              title="Test"
            ></iframe>
            <button>Learn More!</button>
          </div>

          <div className="iframeItem">
            <iframe
              src="https://www.facebook.com/photo.php?fbid=1337914895037479&set=a.222505823245064&type=3&ref=embed_page"
              title="Test"
            ></iframe>
            <button>Learn More!</button>
          </div>

          <div className="iframeItem">
            <iframe
              src="https://www.linkedin.com/feed/?trk=public_post_embed_linkedin-logo-image"
              title="Test"
            ></iframe>
            <button>Learn More!</button>
          </div>
        </article>

      </div>

      <div id='iframeButtonContainer'>
        <button onClick={previousSlide}>⬅️</button>
        <button onClick={nextSlide}>➡️</button>
      </div>
    </section>
  )
}