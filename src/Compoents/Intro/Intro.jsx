import "./Intro.scss";
import Logo from "../../imgs/dp.jpeg";
import Down from "../../imgs/down.png";
import { init } from "ityped";
import { useEffect, useRef } from "react";
const Intro = () => {
  const textRef = useRef(null);
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Upwork User", "React Lover"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={Logo} />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There,I'm</h2>
          <h1>Tony ibrahim</h1>
          <h3>
            Freelance <span ref={textRef}> </span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src={Down} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
