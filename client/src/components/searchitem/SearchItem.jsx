import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/75881056.webp?k=a382374bd2ff1b1557505593d1cdb779bbdde5c3a739a4c59654280c29ec5f04&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">La Badira Hotel</h1>
        <span className="siDistance">2.9 km from center</span>
        <span className="siTaxiOp">free Taxi from the airport</span>
        <span className="siSubtitle">Room with a sea view</span>
        <span className="siFeatures">2 beds + 1 bathroom</span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in the great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excelent</span>
          <button>8.8</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">200$</span>
          <span className="siTaxOp">Includes fees ans taxes</span>
          <button className="siCheckButton">Reserve</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
