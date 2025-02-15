import styled from "@emotion/styled";
import Titlebar from "./Titlebar";

const GameboardContainer = styled.div`
  aspect-ratio: 4 / 3;
  background-color: white;
  position: relative;
  user-select: none;
  word-break: keep-all;

  @media (min-aspect-ratio: 4/3) {
    height: 100%;
  }
  @media (max-aspect-ratio: 4/3) {
    width: 100%;
  }
`;

const GameBoard = () => {
  return (
    <GameboardContainer>
      <Titlebar />
      초콜릿으로는 마작을 칠 수 없어
    </GameboardContainer>
  );
};

export default GameBoard;
