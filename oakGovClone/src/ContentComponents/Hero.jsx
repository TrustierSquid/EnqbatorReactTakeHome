export default function Hero() {
  return (
    <main id="heroComponent">
      <div id="shadow"></div>
      <img src="/src/assets/imgs/heroComponentImgs/heroImg.png" alt="" />
      <div id="searchSection">
        <div id="searchContainer">
          <input type="text" placeholder="Search" />
          <button id="heroSearch">🔎</button>
        </div>
        <span id="searchWOTD">
          Top Searches: Property Records Inmate Locator Jurors Water Billing
          Services
        </span>
      </div>
    </main>
  );
}
