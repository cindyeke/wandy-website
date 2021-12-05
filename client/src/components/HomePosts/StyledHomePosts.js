import styled from "styled-components";
import breakpoints from "common/breakpoints";

export const StyledHomePosts = styled.article`
  height: 650px;
  position: relative;
  border-radius: 10px;
  margin-bottom: 30px;
  background-color: rgb(248, 243, 243);
`;

export const HomePostImg = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  margin-bottom: 20px;
  transition: transform 0.5s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const H2 = styled.h2`
  font-size: 24px;
  margin-top: 20px;
`;
