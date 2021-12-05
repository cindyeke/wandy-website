import React, { useState } from "react";
import Navigation from "components/Navigation";
import { StyledHeader, Title, NavToggle, StyledLayout } from "./StyledHeader";

const Header = () => {
  const [navToggle, setNavToggle] = useState(false);

  return (
    <StyledLayout>
      <StyledHeader>
        <Title>Wandy</Title>
        <NavToggle
          className={`fa ${navToggle ? "fa-times" : "fa-bars"}`}
          onClick={() => setNavToggle(!navToggle)}
        />
      </StyledHeader>
      <Navigation navToggle={navToggle} />
    </StyledLayout>
  );
};

export default Header;
