import styled from "styled-components";
import breakpoints from "common/breakpoints";

export const StyledHeader = styled.div`
  width: 100%;
  background: var(--color-header);
  color: rgb(224, 216, 216);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and ${breakpoints.device.lg} {
    height: 30vh;
    align-items: flex-end;
  }
`;

export const Title = styled.div`
  font-size: 10vw;
  color: var(--color-white);

  @media only screen and ${breakpoints.device.lg} {
    font-size: 5vw;
  }
  @media only screen and ${breakpoints.device.xl} {
    font-size: 4vw;
  }
`;

export const NavToggle = styled.i`
  color: var(--color-white);

  @media only screen and ${breakpoints.device.lg} {
    display: none;
  }
`;

export const StyledLayout = styled.div`
  background: var(--color-header);
  width: 100%;

  @media only screen and ${breakpoints.device.lg} {
    width: 25vw;
  }
  @media only screen and ${breakpoints.device.xl} {
    width: 20vw;
  }
`;
