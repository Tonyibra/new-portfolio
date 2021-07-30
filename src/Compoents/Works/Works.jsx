import React from "react";
import "./Works.scss";
import Image from "../../imgs/mobile.png";
import Project1 from "../../imgs/peoject-1.png";
import Arrow from "../../imgs/arrow.png";
import { featured } from "../../Data";
import { useState } from "react";
const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(
          currentSlide > 0 ? currentSlide - 1 : featured.length - 1
        )
      : setCurrentSlide(
          currentSlide < featured.length - 1 ? currentSlide + 1 : 0
        );
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {featured?.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={Image} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src={Arrow}
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src={Arrow}
        className="arrow right"
        alt=""
        onClick={() => handleClick("right")}
      />
    </div>
  );
};

export default Works;
