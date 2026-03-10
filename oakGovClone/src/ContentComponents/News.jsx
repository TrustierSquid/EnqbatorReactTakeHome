export default function News() {
  return (
    <section id="newsContainer">
      <h4 className="subtitle">KEEPING YOU INFORMED</h4>
      <h1 className="title">News & Media</h1>
      <div id="newsFlexContainer">
        <span className="newsItem">
          <div className="newsItemOverlayContainer">
            <img src="/src/assets/imgs/newsComponentImgs/logo.png" alt="logo" />
            <span className="overlayMessage">Breaking!</span>
          </div>
          <span className="itemDate">🗓️ Feb 28</span>
          <p className="itemDescription">
            Oakland County Expands Proactive Legionella Testing to Children’s
            Village as Results Show Preventive Measures Working.
          </p>
        </span>
        <span className="newsItem">
          <div className="newsItemOverlayContainer">
            <img src="/src/assets/imgs/newsComponentImgs/logo.png" alt="logo" />
            <span className="overlayMessage">Breaking!</span>
          </div>
          <span className="itemDate">🗓️ Feb 28</span>
          <p className="itemDescription">
            Oakland County Expands Proactive Legionella Testing to Children’s
            Village as Results Show Preventive Measures Working.
          </p>
        </span>

        <span className="newsItem">
          <div className="newsItemOverlayContainer">
            <img src="/src/assets/imgs/newsComponentImgs/logo.png" alt="logo" />
          </div>
          <span className="itemDate">🗓️ Feb 23</span>
          <p className="itemDescription">
            Oakland County Expands Proactive Legionella Testing to Children’s
            Village as Results Show Preventive Measures Working.
          </p>
        </span>
        <span className="newsItem">
          <div className="newsItemOverlayContainer">
            <img src="/src/assets/imgs/newsComponentImgs/logo.png" alt="logo" />
          </div>
          <span className="itemDate">🗓️ Feb 23</span>
          <p className="itemDescription">
            Oakland County Expands Proactive Legionella Testing to Children’s
            Village as Results Show Preventive Measures Working.
          </p>
        </span>
      </div>
    </section>
  );
}
