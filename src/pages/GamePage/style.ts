import styled from "styled-components";
import { DifficultyType } from "../../store/types";
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const Grid = styled.div.attrs<{
  mode: DifficultyType;
}>((props) => ({}))<{ mode: DifficultyType }>`
  display: grid;
  grid-template-columns: ${(props) => props.mode === "Hard" ? "1fr 1fr 1fr 1fr 1fr 1fr": "1fr 1fr 1fr 1fr"};
  grid-template-rows:  ${(props) => props.mode === "Easy" ? "1fr 1fr": "1fr 1fr 1fr"};
  gap: 0px 0px;
  grid-template-areas:
    ". . . ."
    ". . . .";
  flex: 1;
  background: #66929e;
`;
