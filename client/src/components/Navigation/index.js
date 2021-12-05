import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCategoryLinks } from "features/categorylinks";
import {
  StyledNavigation,
  NavLists,
  CategoryList,
  SubmenuToggle,
  SubmenuLists,
  SubmenuList,
} from "./StyledNavigation";
import "font-awesome/css/font-awesome.min.css";

function Navigation({ navToggle }) {
  const sidebarRef = useRef(null);
  const submenutoggle = useRef(null);

  const [mobileDisplay, setMobileDisplay] = useState(false);

  const [toggleIcon, setToggleIcon] = useState(true);

  const dispatch = useDispatch();
  const { links } = useSelector((state) => state.categoryLinks);
  const [submenuDisplay, setSubmenuDisplay] = useState(false);

  const handleSubMenuDropdown = () => {
    setSubmenuDisplay(!submenuDisplay);

    // !clickDropdown
    //   ? submenutoggle.current.classList.add("clickedtoggle")
    //   : submenutoggle.current.classList.remove("clickedtoggle");
    // submenutoggle.current.style = !clickDropdown
    //   ? "height: 200px"
    //   : "height: initial";
  };

  useEffect(() => {
    dispatch(getCategoryLinks());
  }, [dispatch]);

  useEffect(() => {
    const bodyElement = document.getElementsByTagName("BODY")[0];

    navToggle
      ? (bodyElement.style.overflow = "hidden")
      : (bodyElement.style.overflow = "initial");
  }, [navToggle]);

  // useEffect(() => {
  //   handleOverflow();

  //   // eslint-disable-next-line
  // }, [clickDropdown]);

  // const handleOverflow = () => {
  //   if (clickDropdown === true) {
  //     sidebarRef.current.style.overflowY = "visible";
  //   } else {
  //     sidebarRef.current.style.overflowY = "hidden";
  //   }
  // };

  const handleCloseMenu = () => {
    if (window.innerWidth <= 1023) {
      setToggleIcon(!toggleIcon);
      setMobileDisplay(!mobileDisplay);

      const body = document.getElementsByTagName("BODY")[0];

      body.style.overflow = "initial";
    }
  };

  return (
    <StyledNavigation navToggle={navToggle}>
      <NavLists navToggle={navToggle} padding>
        <CategoryList navToggle={navToggle}>
          <NavLink
            exact
            to="/"
            activeClassName="active"
            onClick={handleCloseMenu}
          >
            HOME
          </NavLink>
        </CategoryList>
        <CategoryList
          onClick={handleSubMenuDropdown}
          navToggle={navToggle}
          style={{ cursor: "pointer" }}
        >
          CATEGORY
          <SubmenuToggle
            className={`fa ${
              submenuDisplay ? "fa-chevron-up" : "fa-chevron-down"
            }`}
          />
          <SubmenuLists submenuDisplay={submenuDisplay}>
            {links.map((link) => (
              <SubmenuList key={link.id} submenuDisplay={submenuDisplay}>
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
              </SubmenuList>
            ))}
          </SubmenuLists>
        </CategoryList>
        <CategoryList navToggle={navToggle}>
          <NavLink
            to="/about"
            activeClassName="active"
            onClick={handleCloseMenu}
          >
            ABOUT
          </NavLink>
        </CategoryList>
        <CategoryList navToggle={navToggle}>
          <NavLink
            to="/contact"
            activeClassName="active"
            onClick={handleCloseMenu}
          >
            CONTACT
          </NavLink>
        </CategoryList>
      </NavLists>
    </StyledNavigation>
  );
}

export default Navigation;
