import React from 'react'
import image from "../../../Brand/src/assets/images/amazon.png"
import imagee from "../assets/images/flipkart.png"
import shoe from "../assets/images/shoe_image.png"
const Hero = () => {
  return (
    <main className="container">
    <div className="content">
      <h1>YOUR FEET DESERVE THE BEST</h1>
      <p>
        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
        SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
        SHOES.
      </p>

      <div className="btn">
        <button>Shop Now </button>
        <button className="secondary-btn">Category</button>
      </div>

      <div className="shopping">
        <p>Also Available On</p>

        <div className="brand-icons">
          <img src={image} alt="amazon-logo" />
          <img src={imagee} alt="flipkart-logo" />
        </div>
      </div>
    </div>
    <div className="hero-image">
      <img src={shoe} alt="hero-image" />
    </div>
  </main>
);
};


export default Hero;
