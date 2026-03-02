export default function Stats() {
  return (
    <>
      <section id="stats">
        <h1>Oakland County</h1>
        <h4>ALL WAYS, MOVING FORWARD</h4>

        <article id="statContainer">
          <div className="statItem">
            <div className="statOverlayContainer">
              <img src="/src/assets/imgs/statImg1.png" alt="" />
              <h1 className="statNumber">7,923</h1>
            </div>

            <div className="statCard">
              <h3>Healthy Residents</h3>
              <p>
                Nearly 7,300 residents received these new Health360 services in
                2022 at our clinics in Pontiac and Southfield.
              </p>
            </div>
          </div>

          <div className="statItem">
            <div className="statOverlayContainer">
              <img src="/src/assets/imgs/statImg2.png" alt="" />
              <h1 className="statNumber">39,023</h1>
            </div>

            <div className="statCard">
              <h3>Thriving & Inclusive Economy</h3>
              <p>
                Oakland County has more than 39,000 small businesses, 95% have
                fewer than 50 employees.
              </p>
            </div>
          </div>

          <div className="statItem">
            <div className="statOverlayContainer">
              <img src="/src/assets/imgs/statImg3.png" alt="" />
              <h1 className="statNumber">68.4%</h1>
            </div>

            <div className="statCard">
              <h3>Skilled & Educated Workforce</h3>
              <p>
                68.4% of Oakland County residents hold a post-secondary
                education. Our goal is 80% by 2030.
              </p>
            </div>
          </div>
        </article>
      </section>

      <section id="subscribe">
        <article>
          <h1>Subscribe to the All Ways, Moving Forward Newsletter</h1>
          <p>
            Want to stay up to date on county news, events, and services? Sign
            up for our e-newsletter, which delivers the latest county news
            directly to your inbox.
          </p>
          <button>Sign Up!</button>
        </article>
      </section>
    </>
  );
}
