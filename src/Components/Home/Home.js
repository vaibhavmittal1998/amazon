import React from "react";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Home() {
  var settings = {
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="home">
      <div className="home__container">
          
        <Slider {...settings}>
          <div>
            <img
              className="home__container_image"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/ARTs2021/JanART21/India-Bazaar-English-2x2x._CB662270435_.jpg"
              alt=""
            ></img>
          </div>
          <div>
            <img
              className="home__container_image"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/ARTs2021/JanART21/India-Bazaar-2x-LS._CB662270435_.jpg"
              alt=""
            ></img>
          </div>
          <div>
            <img
              className="home__container_image"
              src="homeImage1.png"
              alt=""
            ></img>
          </div>
          <div>
            <img
              className="home__container_image"
              src="homeImage2.png"
              alt=""
            ></img>
          </div>
          <div>
            <img
              className="home__container_image"
              src="homeImage3.png"
              alt=""
            ></img>
          </div>
        </Slider>

        <div className="home__row">
            {/* <Product /> */}
            {/* <Product /> */}
        </div>

        <div className="home__row">
            {/* <Product /> */}
            {/* <Product /> */}
        </div>

        <div className="home__row">
            {/* <Product /> */}
            {/* <Product /> */}
        </div>

      </div>
    </div>
  );
}

export default Home;
