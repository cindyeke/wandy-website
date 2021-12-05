import styled from "styled-components";
import breakpoints from "common/breakpoints";

export const StyledLayout = styled.div`
  display: flex;

  @media only screen and ${breakpoints.device.xs} {
    flex-direction: column;
  }

  @media only screen and ${breakpoints.device.lg} {
    flex-direction: row;
  }
`;
