import styled from "styled-components";
import breakpoints from "common/breakpoints";

export const StyledHomePosts = styled.article`
  height: 600px;
  position: relative;
  border-radius: 5px;
  margin-bottom: 30px;
  background-color: #fff;
  overflow: hidden;

  @media only screen and ${breakpoints.device.sm} {
    height: 700px;
  }

  @media only screen and ${breakpoints.device.md} {
    height: 900px;
    margin-bottom: 50px;
  }

  @media only screen and ${breakpoints.device.lg} {
    width: 48%;
  }

  @media only screen and ${breakpoints.device.xl} {
    height: 620px;
    width: 30%;
    margin-right: 2rem;
  }
`;

export const ImgContainer = styled.div`
  height: 350px;

  @media only screen and ${breakpoints.device.md} {
    height: 450px;
  }

  @media only screen and ${breakpoints.device.xl} {
    height: 350px;
  }
`;

export const HomePostImg = styled.img`
  width: 100%;
  height: 450px;
  object-fit: cover;
  transition: transform 0.5s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  @media only screen and ${breakpoints.device.md} {
    height: 450px;
  }

  @media only screen and ${breakpoints.device.xl} {
    height: 350px;
  }
`;

export const HomePostDetails = styled.div`
  padding: 1rem;
  font-family: "Roboto", sans-serif;

  @media only screen and ${breakpoints.device.md} {
    padding: 2rem;
  }

  @media only screen and ${breakpoints.device.xl} {
    padding: 1rem;
  }
`;

export const H2 = styled.h2`
  font-size: 5.5vw;
  margin-top: 20px;
  font-family: "Spartan", sans-serif;

  & > a {
    text-decoration: none;
    color: var(--color-orange);
  }

  @media only screen and ${breakpoints.device.sm} {
    font-size: 4.5vw;
  }

  @media only screen and ${breakpoints.device.lg} {
    font-size: 2.5vw;
  }

  @media only screen and ${breakpoints.device.xl} {
    font-size: 1.6vw;
  }
`;

export const ArticleP = styled.p`
  margin: ${(props) => (props.nomargin ? "0" : "0.8rem 1rem")};
  font-weight: ${(props) => (props.nobold ? "0" : "bold")};
  font-size: 3vw;

  & > a {
    text-decoration: none;
    color: var(--color-orange);
  }

  @media only screen and ${breakpoints.device.sm} {
    font-size: 2.7vw;
  }

  @media only screen and ${breakpoints.device.md} {
    margin: ${(props) => (props.nomargin ? "0" : "1rem 1rem")};
  }

  @media only screen and ${breakpoints.device.lg} {
    font-size: 1.8vw;
  }

  @media only screen and ${breakpoints.device.xl} {
    font-size: 0.8vw;
  }
`;

export const ArticlePreview = styled.p`
  font-size: 4vw;
  margin-bottom: 1rem;
  overflow: hidden;
  position: relative;
  line-height: 1.2em;
  max-height: 3.6em;
  text-align: justify;
  margin-right: -1em;
  padding-right: 1em;

  &:before {
    content: "...";
    position: absolute;
    right: 0;
    bottom: 0;
  }

  @media only screen and ${breakpoints.device.sm} {
    margin-top: 2rem;
    font-size: 3.7vw;
  }

  @media only screen and ${breakpoints.device.lg} {
    font-size: 2.3vw;
  }

  @media only screen and ${breakpoints.device.xl} {
    margin-top: 0;
    font-size: 1.2vw;
  }
`;
