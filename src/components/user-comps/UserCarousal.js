import React from 'react'
import Carousel from "react-bootstrap/Carousel";

import one from "../../images/MenoushPics/1.JPG"
import two from "../../images/MenoushPics/2.JPG";
import three from "../../images/MenoushPics/3.JPG";
import four from "../../images/MenoushPics/4.JPG";
import five from "../../images/MenoushPics/5.JPG";
import six from "../../images/MenoushPics/6.JPG";
import seven from "../../images/MenoushPics/7.JPG";
import eight from "../../images/MenoushPics/8.JPG";
import nine from "../../images/MenoushPics/9.JPG";
import ten from "../../images/MenoushPics/10.JPG";
import eleven from "../../images/MenoushPics/11.JPG";
import twelve from "../../images/MenoushPics/12.JPG";
import thirteen from "../../images/MenoushPics/13.JPG";
import fourteen from "../../images/MenoushPics/14.JPG";
import fifteen from "../../images/MenoushPics/15.JPG";

function UserCarousal() {

    // console.log(one);

  return (
    <Carousel
      className="mainCarousal"
      style={{ marginTop: "1rem" }}
      fade
      interval={3000}
    >
      <Carousel.Item className="text-center">
        <img className="carousalImages" src={one} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item className="text-center">
        <img className="carousalImages" src={two} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item className="text-center">
        <img className="carousalImages" src={three} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item className="text-center">
        <img className="carousalImages" src={four} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item className="text-center">
        <img className="carousalImages" src={five} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item className="text-center">
        <img className="carousalImages" src={six} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item className="text-center">
        <img className="carousalImages" src={seven} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item className="text-center">
        <img className="carousalImages" src={eight} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item className="text-center">
        <img className="carousalImages" src={nine} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item className="text-center">
        <img className="carousalImages" src={ten} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item className="text-center">
        <img className="carousalImages" src={eleven} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item className="text-center">
        <img className="carousalImages" src={twelve} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item className="text-center">
        <img className="carousalImages" src={thirteen} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item className="text-center">
        <img className="carousalImages" src={fourteen} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item className="text-center">
        <img className="carousalImages" src={fifteen} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default UserCarousal