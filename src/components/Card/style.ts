import styled from "styled-components";
import { animated } from "react-spring";

const Card = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
  will-change: transform, opacity;
  background-size: cover;
`;

export const CardFront = styled(Card)`
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background: #af2739;
`;

export const CardBack = styled(Card)`
  background-image: url("/icons/logo.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const CardBGImage = styled(Card).attrs<{
  cardvalue: string;
}>((props) => ({}))<{ cardvalue: string }>`
  background-image: url("/icons/${(props) => props.cardvalue}.svg");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  width: 60%;
  margin: 0 auto;
`;

export const CardContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  border: 1px solid #fff;
`;
