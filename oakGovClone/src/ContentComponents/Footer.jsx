export default function Footer() {
  return (
    <>
      <footer id="footer">
        <h1>Connect with #OaklandCounty</h1>

        <div id="iframeContainer">
          {/* clone of the iframes from the original websites code. Wont load in localhost, but present for the sake of presentation of the take-home project. */}

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
        </div>
      </footer>
      <footer id="footerContainer">
        <div className="footerItem">
          <img src="/src/assets/imgs/footerComponentImgs/footerImg1.png" alt="" />
          <img src="/src/assets/imgs/footerComponentImgs/footerImg2.png" alt="" />
          <img src="/src/assets/imgs/footerComponentImgs/footerImg3.png" alt="" />
        </div>

        <div className="footerItem">
          <span className="contactInfo">
            <h4>Contact Us</h4>
            <p>1200 N. Telegraph Road</p>
            <p>Pontiac, MI 48341</p>
            <br />
            <p className="contactLink">Campus Map</p>
          </span>

          <span className="contactInfo">
            <h4>Useful Links</h4>
            <p className="contactLink">Department Directory</p>
            <p className="contactLink">Service Directory</p>
            <p className="contactLink">OakAlert</p>
            <p className="contactLink">Public Meeting Notices</p>
            <p className="contactLink">Watch Commission Meetings</p>
            <p className="contactLink">County Budget</p>
            <p className="contactLink">Investor Relations</p>
            <p className="contactLink">Transparency Dashboard</p>
          </span>

          <span className="contactInfo">
            <h4>Connect with us</h4>
            <input type="text" />
            <div className="socialPlatforms">
              <img src="/src/assets/imgs/footerComponentImgs/facebook.png" alt="" />
              <img src="/src/assets/imgs/footerComponentImgs/twitter.png" alt="" />
              <img src="/src/assets/imgs/footerComponentImgs/youtube.png" alt="" />
              <img src="/src/assets/imgs/footerComponentImgs/instagram.png" alt="" />
              <img src="/src/assets/imgs/footerComponentImgs/linkedin.png" alt="" />
            </div>
            <button className="clickForMore">Click For More</button>
          </span>
        </div>
      </footer>
    </>
  );
}
