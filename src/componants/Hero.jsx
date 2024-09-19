import { FaCheckCircle } from "react-icons/fa";
import Image from "../assets/image.png";
import Image2 from "../assets/image2.png";
import logo from "../assets/logo.png";
import "./Hero.css";
import React from "react";

function Hero() {
  return (
    <>
      <div className="mainhero flex gap-36">
        <div className="hero3 w-500">
          <p className="hero1">Simple Busniess management tool</p>
          <img src={Image2} alt="" className="circle" />
          <h1 className="hero2">
            Why 
            <span className="subhero"> We are </span>
            <br />
            better from <br />
            others
          </h1>
          <p className="para1">
            Powerful project management tools for <br /> your companies of all
            sizes.
          </p>
          <div className="btndiv gap-8">
            <button className="btn3">Get started for free</button>
            <a href="#">Get a Live Demo</a>
          <div className="flex gap-20">
          <div className="icon1">
              <FaCheckCircle />
              <p>No credit card required</p>
            </div>
            <div className="icon1">
              <FaCheckCircle className=" " />
              <p>No credit card required</p>
            </div>
          </div>
          </div>
        </div>

        <div>
          <img src={Image} alt="" className="heroside" />
        </div>
      </div>
    </>
  );
}

export default Hero;
