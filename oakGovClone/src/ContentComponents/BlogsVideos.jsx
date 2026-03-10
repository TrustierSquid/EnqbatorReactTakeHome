export default function BlogsVideos() {
  return (
    <section id="blogsVideosContainer">
      <h4>EXPLORE & LEARN</h4>
      <h1>Blogs & Videos</h1>

      <div id="blogVideosFlexContainer">
        <span className="blogVideoItem">
          <div className="blogVideoOverlayContainer">
            <img src="/src/assets/imgs/blogs&videosComponentImgs/blog1.png" alt="" />

            <div className="blogInformation">
              <h4 className="blogType">Blog</h4>

              <span className="blogDesc">
                <h3 className="blogTitle">
                  Celebrating Women's History Month in Oakland County
                </h3>
                <p className="blogTag">
                  The movement for women's recognition led to the UN declaring
                  March 8 as International Women’s Day in 1975 and President
                  Carter designating it National Women’s History Week in 1980
                </p>
              </span>
            </div>
          </div>
        </span>

        <span className="blogVideoItem">
          <div id="blogCardFlexContainer">
            <article className="blogCard">
              <img src="/src/assets/imgs/blogs&videosComponentImgs/cardImg1.png" alt="" />

              <span className="cardDesc">
                <h3 className="cardTitle">Oakland County Executive David</h3>
                <p>
                  Mark your calendars! Oakland County Executive David Coulter
                </p>
              </span>
            </article>

            <article className="blogCard">
              <img src="/src/assets/imgs/blogs&videosComponentImgs/cardImg2.png" alt="" />

              <span className="cardDesc">
                <h3 className="cardTitle">
                  Are Smart-Home Cameras Watching More Than You
                </h3>
                <p>
                  Smart-home cameras are one of those upgrades that feel like a
                  no-brainer.
                </p>
              </span>
            </article>

            <article className="blogCard">
              <img src="/src/assets/imgs/blogs&videosComponentImgs/cardImg3.png" alt="" />

              <span className="cardDesc">
                <h3 className="cardTitle">
                  Support Available for Upcoming Student Debt
                </h3>
                <p>
                  The phrase "student loan repayment" is often met with feelings
                  of confusion.
                </p>
              </span>
            </article>
          </div>
        </span>

        <span className="blogVideoItem">
          <div className="blogVideoOverlayContainer">
            <img src="/src/assets/imgs/blogs&videosComponentImgs/blog2.png" alt="" />

            <div className="blogInformation">
              <h4 className="blogType">Video</h4>

              <span className="blogDesc">
                <h3 className="blogTitle">Oakland County: A Tribute 2025</h3>
                <p className="blogTag">
                  We are a thriving community driven by our people, innovation
                  and unity.
                </p>
              </span>
            </div>
          </div>
        </span>
      </div>
    </section>
  );
}
