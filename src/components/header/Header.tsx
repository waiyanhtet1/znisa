import { House, User } from "lucide-react";
import { useState } from "react";
import Button from "../button/Button";
import "./Header.css";
import logo from "/images/logo.png";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div
        className={`header-container${sidebarOpen ? " sidebar-active" : ""}`}
      >
        {/* Hamburger icon for mobile/tablet */}
        <button
          className={`hamburger ${sidebarOpen ? "open" : ""}`}
          aria-label="Toggle navigation"
          onClick={() => setSidebarOpen((open) => !open)}
        >
          <div className="hamburger-bar" />
          <div className="hamburger-bar" />
          <div className="hamburger-bar" />
        </button>

        {/* logo placement */}
        <div className="header-logo">
          <img src={logo} alt="" className="header-logo-img" />
          <p className="header-logo-title">znisa</p>
        </div>

        {/* desktop navigation */}
        <div className="header-navigation-container desktop-nav">
          <div className="header-navigation-item navigation-active">
            <House />
          </div>
          <div className="header-navigation-item">About</div>
          <div className="header-navigation-item">Projects</div>
          <div className="header-navigation-item">Contact me</div>
        </div>

        {/* desktop action buttons */}
        <div className="header-action-container desktop-nav">
          <Button>Hire Me</Button>
          <Button variant="circular">
            <User />
          </Button>
        </div>
      </div>

      {/* Mobile/Tablet sidebar */}
      <div className={`mobile-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="header-navigation-container">
          <div className="header-navigation-item navigation-active">
            <House /> Home
          </div>
          <div className="header-navigation-item">About</div>
          <div className="header-navigation-item">Projects</div>
          <div className="header-navigation-item">Contact me</div>
        </div>

        <div className="header-action-container">
          <Button>Hire Me</Button>
          <Button variant="circular">
            <User />
          </Button>
        </div>
      </div>

      {/* Overlay for mobile/tablet */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? "sidebar-active" : ""}`}
        onClick={() => setSidebarOpen(false)}
      />
    </>
  );
};

export default Header;
