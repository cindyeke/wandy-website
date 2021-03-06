import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../scss/Navigation.scss";
import "font-awesome/css/font-awesome.min.css";

function Navigation({ links, socialLinks }) {
  const sidebarRef = useRef(null);
  const submenutoggle = useRef(null);

  const [mobileDisplay, setMobileDisplay] = useState(false);
  const [clickDropdown, setClickDropdown] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(true);

  const showNavLinks = () =>
    window.innerWidth <= 1023 && setMobileDisplay(true);

  const handleDropdown = () => {
    setClickDropdown(!clickDropdown);

    !clickDropdown
      ? submenutoggle.current.classList.add("clickedtoggle")
      : submenutoggle.current.classList.remove("clickedtoggle");
    // submenutoggle.current.style = !clickDropdown
    //   ? "height: 200px"
    //   : "height: initial";
  };

  useEffect(() => {
    showNavLinks();
  }, []);

  useEffect(() => {
    handleOverflow();

    // eslint-disable-next-line
  }, [clickDropdown]);

  const handleToggle = () => {
    setToggleIcon(!toggleIcon);
    setMobileDisplay(!mobileDisplay);

    const body = document.getElementsByTagName("BODY")[0];

    if (!toggleIcon) {
      body.style.overflow = "initial";
    } else {
      body.style.overflow = "hidden";
    }
  };

  const handleOverflow = () => {
    if (clickDropdown === true) {
      sidebarRef.current.style.overflowY = "visible";
    } else {
      sidebarRef.current.style.overflowY = "hidden";
    }
  };

  const handleCloseMenu = () => {
    if (window.innerWidth <= 1023) {
      setToggleIcon(!toggleIcon);
      setMobileDisplay(!mobileDisplay);

      const body = document.getElementsByTagName("BODY")[0];

      body.style.overflow = "initial";
    }
  };

  return (
    <nav
      ref={sidebarRef}
      className={`sidebar ${!toggleIcon && "sidebarresponsive"}`}
    >
      <div style={{ position: "relative" }}>
        <p>Wandy</p>
        <span onClick={handleToggle} className="toggle">
          <i className={`fa ${toggleIcon ? "fa-bars" : "fa-times"}`}></i>
        </span>
      </div>

      <div className={mobileDisplay ? "noresponsive" : "responsive"}>
        <div className="navigation">
          <ul>
            <li>
              <NavLink
                exact
                to="/"
                activeClassName="active"
                onClick={handleCloseMenu}
              >
                HOME
              </NavLink>
            </li>
            <li
              onClick={handleDropdown}
              className="submenutoggle"
              ref={submenutoggle}
            >
              CATEGORY{" "}
              <span>
                <i
                  className={`fa ${
                    clickDropdown ? "fa-chevron-up" : "fa-chevron-down"
                  }`}
                ></i>
              </span>
              <div className={clickDropdown ? "submenu" : "nosubmenu"}>
                <ul className="sub-items">
                  {links.map((link) => (
                    <li key={link.id}>
                      <NavLink
                        onClick={handleCloseMenu}
                        to={{
                          pathname: `/category/${link.pathname}`,
                          categoryProps: {
                            name: `${link.name}`,
                          },
                        }}
                        activeClassName="active"
                      >
                        {link.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li>
              <NavLink
                to="/about"
                activeClassName="active"
                onClick={handleCloseMenu}
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                activeClassName="active"
                onClick={handleCloseMenu}
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
