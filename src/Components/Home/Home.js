import React from "react";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Product from "./../Product/Product";

function Home() {
  var settings = {
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
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
        <div className="home__row__container">
          <div className="home__row">
            <Product
              title="URBN 10000 mAh Li-Polymer Ultra Compact Power Bank with 12W Fast Charge (Blue)"
              price="599.00"
              image="https://m.media-amazon.com/images/I/31e-bvE+q5L._AC_SR400,600_.jpg"
              rating={3}
            />
            <Product
              title="Havells Vitonica Juicer Mixer Grinder with 3 Stainless Steel Jar (White and Blue)"
              price="3,599.00"
              image="https://images-eu.ssl-images-amazon.com/images/I/41V3xvQL12L._AC_US160_FMwebp_QL70_.jpg"
              rating={4}
            />
            <Product
              title="Vivo V19 (Mystic Silver, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
              price="24,999.00"
              image="https://m.media-amazon.com/images/I/41Ph1PiqtVL.__AC_SY400_.jpg"
              rating={4}
            />
          </div>

          <div className="home__row">
            <Product
              title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
              price="1,53,900.00"
              image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._SL1500_.jpg"
              rating={4}
            />
          </div>

          <div className="home__row">
            <Product
              title="VSK Bean Bag XXXL Sofa Mudda Cover Black (Without Beans) Cover only"
              price="980.00"
              image="https://m.media-amazon.com/images/I/51QO4iATxCL._AC_SY400_.jpg"
              rating={4}
            />
            <Product
              title="Redux RWS0218S Analogue Blue Dial Men's and Boys' Watch"
              price="1679.00"
              image="https://m.media-amazon.com/images/I/51898Ck3WCL._AC_SR400,600_.jpg"
              rating={4}
            />
            <Product
              title="Amazon Brand - Symbol Men Sweatshirt"
              price="800.00"
              image="https://m.media-amazon.com/images/I/31gXMVdurfL._AC_SR400,600_.jpg"
              rating={4}
            />
            <Product
              title="Redux RWS0272S Analogue IPG Golden Dial Men’s and Boy's Watch"
              price="3000.00"
              image="https://m.media-amazon.com/images/I/41BC5qXlbaL._AC_SR400,600_.jpg"
              rating={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
