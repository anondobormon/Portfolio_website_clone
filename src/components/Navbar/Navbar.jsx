import { useEffect, useState } from "react";
import "./Navbar.scss";

export default function Navbar({ darkMode }) {
  const [sticky, setSticky] = useState("");
  const [sideBar, setSideBar] = useState(false);

  const [dark, setDark] = darkMode;

  useEffect(() => {
    window.addEventListener("scroll", stickyNavbar);

    return () => {
      window.removeEventListener("scroll", stickyNavbar);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", hideSidebar);

    return () => {
      window.removeEventListener("resize", hideSidebar);
    };
  }, []);

  const stickyNavbar = () => {
    if (window !== undefined) {
      let height = window.scrollY;
      height > 10 ? setSticky("sticky_nav") : setSticky("");
    }
  };

  const hideSidebar = () => {
    if (window !== undefined) {
      let width = window.innerWidth;
      width > 992 && setSideBar(false);
    }
  };

  return (
    <div>
      <div className={`navbar ${sticky}`}>
        <div className="container">
          <div className="flex">
            <div className="logo">LOGO</div>
            <ul className="items">
              <li className="item">
                <a href="#home">Home</a>
              </li>
              <li className="item">
                <a href="#about">About</a>
              </li>
              <li className="item">
                {" "}
                <a href="#service">Service</a>
              </li>
              <li className="item">
                {" "}
                <a href="#portfolio">Portfolio</a>
              </li>
              <li className="item">
                {" "}
                <a href="#client">Client Review</a>
              </li>
              <li className="item">
                {" "}
                <a href="#contact">Contact</a>
              </li>
              <li className="darkModeIcon" onClick={() => setDark(!dark)}>
                {dark ? (
                  <i class="fa-solid fa-sun"></i>
                ) : (
                  <i class="fa-solid fa-moon"></i>
                )}
              </li>
              <li>
                <button className="button">Pricing</button>
              </li>
              <li
                onClick={() => {
                  setSideBar(true);
                }}
                className="menu"
              >
                <i class="fa-solid fa-bars"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`side_bar ${sideBar && "side_bar_active"}`}>
        <div className="items">
          <ul>
            <li className="item">HOME</li>
            <li className="item">ABOUT</li>
            <li className="item">SERVICES</li>
            <li className="item">PORTFOLIO</li>
            <li className="item">CLIENT'S REVIEWS</li>
            <li className="item">CONTACT</li>

            <button className="button">Pricing</button>
          </ul>
          <div
            onClick={() => {
              setSideBar(false);
            }}
            className="close"
          >
            <i class="fa-solid fa-circle-chevron-down"></i>
          </div>
          <div className="logo">LOGO</div>

          <div className="social">
            <ul>
              <li>
                <i class="fa-brands fa-twitter"></i>
              </li>
              <li>
                <i class="fa-brands fa-facebook-f"></i>
              </li>
              <li>
                <i class="fa-brands fa-linkedin-in"></i>
              </li>
              <li>
                <i class="fa-brands fa-instagram"></i>
              </li>
              <li>
                <i class="fa-brands fa-youtube"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
