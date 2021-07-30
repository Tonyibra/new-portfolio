import "./Topbar.scss";
import { Person, Mail } from "@material-ui/icons";

const Topbar = ({ setMenuOpen, menuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active ")}>
      <div className="wrapper">
        <div className="left">
          <div className="logo">
            <span>Tony ibrahim</span>
          </div>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+961 76 940499</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>tonyibra.ads@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburgur" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
