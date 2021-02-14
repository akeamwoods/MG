import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Header } from "../../components/Header";
import { useTypedSelector } from "../../store";
import { actions } from "../../store/actions";
import { Card as CardType } from "../../store/types";
import { Card } from "./../../components/Card";
import { Grid, PageContainer } from "./style";
import { useStopwatch } from "react-timer-hook";
import { v4 as uuidv4 } from "uuid";
import { convertMinutesAndSeconds } from "../../helpers/TimeHelpers";
import { useHistory } from "react-router-dom";
import { Popover } from "../../components/Popover";

export const GamePage = () => {
  const cards = useTypedSelector((state) => state.cards);
  const dispatch = useDispatch();
  const handleClick = (card: CardType) => {
    if (!card.flipped) {
      dispatch(actions.cardClicked(card));
    }
  };
  const history = useHistory();
  const { seconds, minutes, pause } = useStopwatch({ autoStart: true });
  const username = useTypedSelector((state) => state.username);
  const mode = useTypedSelector((state) => state.difficulty);
  const cardsFlipped = useTypedSelector((state) => state.flippedCards.length);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    if (cardsFlipped > 0 && cardsFlipped === cards.length) {
      pause();
      dispatch(
        actions.gameFinished({
          id: uuidv4(),
          time: convertMinutesAndSeconds(minutes, seconds),
          username: username ?? "undefined",
          date: new Date().toISOString(),
          mode: mode,
        })
      );
      setIsVisible(true);
    }
    // eslint-disable-next-line
  }, [cardsFlipped, cards]);

  useEffect(() => {
    if (cards.length === 0) history.push("/");
    // eslint-disable-next-line
  }, [cards]);
  return (
    <PageContainer>
      <Header minutes={minutes} seconds={seconds} />
      <Grid mode={mode}>
        {cards.map((card) => (
          <Card key={card.id} card={card} onClick={handleClick} />
        ))}
      </Grid>
      {isVisible && (
        <Popover
          time={convertMinutesAndSeconds(minutes, seconds)}
          onPlayAgainClick={() => history.push("/")}
          onHighscoresClick={() => history.push("/Scores")}
        />
      )}
    </PageContainer>
  );
};
