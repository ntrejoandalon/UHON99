import { Row } from "antd";
import styled from "styled-components";

interface StyledRowProps {
  direction: "left" | "right";
}

// Smooth fade-in transition
export const SlideContent = styled.div`
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    &.visible {
        opacity: 1;
    }
`;

export const SlideWrapper = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
`;

export const ContentSection = styled("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const StyledRow = styled(Row)<StyledRowProps>`
  flex-direction: ${({ direction }) => (direction === "left" ? "row" : "row-reverse")};
`;


export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;

export const SlideNavButton = styled.button`
  padding: 0.4rem 1.2rem;
  background-color: #1b1b50;
  color: white;
  border: none;
  border-radius: 5px;
  margin: 0 0.25rem;
  cursor: pointer;
  &:hover {
    background-color: #2e2e7e;
  }
`;

export const TopImage = styled.img`
  width: 100%;
  max-height: 400PX;
  object-fit: cover;
  margin-bottom: 1.5rem;
`;

export const ImageRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const IconWrapper = styled.div<{ isActive: boolean }>`
  padding: 0.5rem;
  border-radius: 10px;
  background-color: ${({ isActive }) => (isActive ? "#e0e0ff" : "transparent")};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f2f2f2;
  }
`;
