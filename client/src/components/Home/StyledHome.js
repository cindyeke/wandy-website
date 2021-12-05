import styled from "styled-components";
import breakpoints from "common/breakpoints";

export const StyledHome = styled.section`
  width: 100%;
  padding: 1.5rem;

  @media only screen and ${breakpoints.device.xl} {
    width: 80vw;
  }
`;
