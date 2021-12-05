import styled from "styled-components";
import breakpoints from "common/breakpoints";

export const StyledNavigation = styled.nav`
  background-color: var(--color-header);

  @media only screen and ${breakpoints.device.xs} {
    height: ${(props) => (props.navToggle ? "100vh" : "0")};
    width: 100%;
    transition: all 2s ease;
  }

  @media only screen and ${breakpoints.device.lg} {
    height: 70vh;
  }
`;

export const NavLists = styled.ul`
  list-style-type: none;
  width: 100%;

  @media only screen and ${breakpoints.device.xs} {
    padding: ${(props) => (props.padding ? "5rem 2rem" : "0")};
    font-family: "Roboto", sans-serif;
    opacity: ${(props) => (props.navToggle ? "1" : "0")};
    transition: opacity 1000ms ease-in;
  }

  @media only screen and ${breakpoints.device.lg} {
    opacity: 1;
  }
`;

export const CategoryList = styled.li`
  margin-bottom: 30px;
  font-size: 4.5vw;
  letter-spacing: 1.5px;
  color: var(--color-white);
  text-transform: uppercase;

  & > a {
    text-decoration: none;

    &:link,
    &:visited {
      color: var(--color-white);
    }

    &:hover,
    &.active {
      color: white;

      &:link,
      &:visited {
        color: white;
      }
    }
  }

  @media only screen and ${breakpoints.device.sm} {
    font-size: 3.8vw;
  }

  @media only screen and ${breakpoints.device.lg} {
    font-size: 2vw;
  }
  @media only screen and ${breakpoints.device.xl} {
    font-size: 1vw;
  }
`;

export const SubmenuToggle = styled.i`
  margin-left: 5px;
  -webkit-text-stroke: 1px var(--color-header);
`;

export const SubmenuLists = styled.ul`
  padding-left: 2rem;
  list-style-type: none;
  height: ${(props) => (props.submenuDisplay ? "185px" : "0")};
  opacity: ${(props) => (props.submenuDisplay ? "1" : "0")};
  transition: height 2s ease, opacity 800ms ease-in;

  @media only screen and ${breakpoints.device.md} {
    height: ${(props) => (props.submenuDisplay ? "250px" : "0")};
  }

  @media only screen and ${breakpoints.device.xl} {
    height: ${(props) => (props.submenuDisplay ? "150px" : "0")};
  }
`;

export const SubmenuList = styled.li`
  padding-top: 15px;
  font-size: 4vw;
  letter-spacing: 1.5px;
  color: var(--color-white);
  text-transform: uppercase;

  & > a {
    text-decoration: none;

    &:link,
    &:visited {
      color: var(--color-white);
    }

    &:hover,
    &.active {
      color: white;

      &:link,
      &:visited {
        color: white;
      }
    }
  }

  @media only screen and ${breakpoints.device.sm} {
    font-size: 3vw;
  }

  @media only screen and ${breakpoints.device.md} {
    font-size: 3.2vw;
  }

  @media only screen and ${breakpoints.device.lg} {
    font-size: 1.8vw;
  }

  @media only screen and ${breakpoints.device.xl} {
    font-size: 0.8vw;
  }
`;
