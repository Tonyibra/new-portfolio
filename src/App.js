import React from "react";
import Topbar from "./Compoents/Topbar/Topbar";
import Intro from "./Compoents/Intro/Intro";
import Portfolio from "./Compoents/Portfolio/Portfolio";
import Works from "./Compoents/Works/Works";
import Testimonials from "./Compoents/Testimonials/Testimonials";
import Contact from "./Compoents/Contact/Contact";
import "./app.scss";
import Menu from "./Compoents/Menu/Menu";
function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
