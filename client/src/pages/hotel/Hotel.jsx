import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./hotel.css";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      id: 1,
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/37141586.jpg?k=16a46f099c68e02205afb63eae59a5889198334099c5b85a1a63e030fe5596d7&o=&hp=1",
    },
    {
      id: 2,
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/75881056.webp?k=a382374bd2ff1b1557505593d1cdb779bbdde5c3a739a4c59654280c29ec5f04&o=&s=1",
    },
    {
      id: 3,
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/42192660.jpg?k=40f891f673734e72c33716c940f28911439d312bc3357c03e59dfee65a2d28e7&o=&hp=1",
    },
    {
      id: 4,
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/223955877.jpg?k=5303c473558fb51994479f66ff026e4311f1f97bef246ec32b724aeb8ffd9d90&o=&hp=1",
    },
    {
      id: 5,
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/42192656.jpg?k=9108b0524f683f05f9998dc83db0ba3728c56d13fc3a89901369100ed051a44c&o=&hp=1",
    },
    {
      id: 6,
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/44955727.jpg?k=e0a63f80c4fb90fcb74a06ebbf8c4c8991c0d07ca90ebc5622f3bad1b953ef7a&o=&hp=1",
    },
  ];
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or book now!</button>
          <h1 className="hotelTitle">La Badira Hotel</h1>
          <div className="hotelAdress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Hammamet, 8050 Hammamet, Tunisia </span>
          </div>
          <span className="hotelDistance">
            Great location - 2.9km from the center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over 200$ at this hotel an get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImageWrapper" key={photo.id}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetaisTexts">
              <h1 className="hotelTitle">
                Get the celebrity treatment with world-class service at La
                Badira
              </h1>
              <p className="hotelDesc">
                Offering 3 outdoor pools and a private beach access, La Badira -
                Adult Only is located in Hammamet. Free WiFi access is
                available. Each room here will provide you with a TV, satellite
                channels, air conditioning and a terrace. They include a
                mini-bar and a safety deposit box. Private bathroom also comes
                with bathrobes. You can enjoy sea view and pool view from the
                room from the balcony. A buffet breakfast is served each morning
                at Zahilah restaurant. Guests can enjoy local cuisine at the
                Adra restaurant. Other facilities offered at the property
                include Spa and wellness center using Clarins products, meeting
                facilities, an indoor pool, a yoga and fitness center, a tour
                desk and luggage storage. An array of activities can be enjoyed
                on site or in the surroundings, including golfing. The property
                offers a tennis court and free parking with valet service. The
                hotel is 6.6 mi from Yasmine Hammamet, 2.1 mi from Medina and
                7.5 mi from Citrus Golf. Tunis-Carthage International Airport is
                45 mi away. Airport shuttle can be provided upon request.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a week stay!</h1>
              <span>
                Located in Hammamet touristic place with a nice seaview.
              </span>
              <h2>
                <b>1000$</b> (a week)
              </h2>
              <button>Reserve or book now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
