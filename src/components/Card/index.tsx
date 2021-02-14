import React from "react";
import { useSpring } from "react-spring";
import { CardContainer, CardBack, CardBGImage, CardFront } from "./style";
import { Card as CardType } from "./../../store/types";

export const Card: React.FC<{
  card: CardType;
  onClick: (card: CardType) => void;
}> = React.memo(({ card, onClick }) => {
  const { transform, opacity } = useSpring({
    opacity: card.flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${card.flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <CardContainer onClick={() => onClick(card)}>
      <CardBack
        style={{
          // @ts-ignore
          opacity: opacity.interpolate((o) => 1 - o),
          transform,
        }}
      />
      <CardFront
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
        }}
      >
        <CardBGImage cardvalue={card.value} />
      </CardFront>
    </CardContainer>
  );
});
