import styled from "styled-components";
import breakpoints from "common/breakpoints";

export const StyledHome = styled.section`
  width: 100%;
  padding: 3rem 1.5rem;

  @media only screen and ${breakpoints.device.xl} {
    width: 80vw;
  }

  @media only screen and ${breakpoints.device.md} {
    padding: 3rem 2rem;
  }

  @media only screen and ${breakpoints.device.lg} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media only screen and ${breakpoints.device.xl} {
    justify-content: flex-start;
  }
`;
