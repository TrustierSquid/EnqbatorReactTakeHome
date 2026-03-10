export default function Footer() {
  return (
    <>
      
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
