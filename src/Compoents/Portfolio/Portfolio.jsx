import "./Portfolio.scss";
import { webapps, featured, mobile } from "../../Data";
import PortfolioList from "../../PortfolioList/PortfolioList";
import { useState, useEffect } from "react";
const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featured);
        break;
      case "web":
        setData(webapps);
        break;
      case "mobile":
        setData(mobile);
        break;
      default:
        setData(featured);
    }
  }, [selected]);
  const List = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "web Apps",
    },
    {
      id: "mobile",
      title: "Mobile Apps",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {List.map((item) => (
          <PortfolioList
            id={item.id}
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {data?.map((project, idx) => (
          <div key={idx} className="item">
            <img src={project.img} alt="" />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
