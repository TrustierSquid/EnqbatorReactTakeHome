export default function BlogsVideos() {
  return (
    <section id="blogsVideosContainer">
      <h4>EXPLORE & LEARN</h4>
      <h1>Blogs & Videos</h1>

      <div id="blogVideosFlexContainer">
        
        <span className="blogVideoItem">
          <div className="blogVideoOverlayContainer">
            <img src="/src/assets/imgs/blog1.png" alt="" />

            <div className="blogInformation">
              <h4 className="blogType">Blog</h4>

              <span className="blogDesc">
                <h3 className="blogTitle">
                  Celebrating Women's History Month in Oakland County 🙌
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
          <div className="blogVideoOverlayContainer">
            <img src="/src/assets/imgs/blog2.png" alt="" />

            <div className="blogInformation">
              <h4 className="blogType">Video</h4>

              <span className="blogDesc">
                <h3 className="blogTitle">
                  Oakland County: A Tribute 2025 🙌
                </h3>
                <p className="blogTag">
                  We are a thriving community driven by our people, innovation and unity.
                </p>
              </span>
            </div>
          </div>
        </span>

      </div>
    </section>
  );
}
