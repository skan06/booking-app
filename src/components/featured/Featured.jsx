import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/654468.jpg?k=cc25f9bd4d471b24e38add37125b96197c4da3e2760459566cf867e67eb3c285&o="
          alt="tunis"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Tunis</h1>
          <h2>66 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/654427.jpg?k=4bee1627419a4bb4c4565179860110cb99b9cf591536eee847f54e0f0438be39&o="
          alt="sousse"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Sousse</h1>
          <h2>86 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/654398.jpg?k=427e7f65701353ae5b7873188a5ed541f44ba7ac10f8e13a4e456d8191cc517b&o="
          alt="hammamet"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Hammamet</h1>
          <h2>160 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
