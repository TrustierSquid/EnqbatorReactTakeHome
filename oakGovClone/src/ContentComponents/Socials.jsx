

export default function Socials(){
  return (
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
  )
}