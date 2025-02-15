import styled from "@emotion/styled";
import Titlebar from "./Titlebar";

const GameboardContainer = styled.div`
  aspect-ratio: 4 / 3;
  background-color: white;
  position: relative;
  user-select: none;
  word-break: keep-all;
  border-radius: 0.6vmin;

  @media (min-aspect-ratio: 4/3) {
    height: 100%;
  }
  @media (max-aspect-ratio: 4/3) {
    width: 100%;
  }
`;

const ECGContainer = styled.img`
  position: absolute;
  top: 8%;
  left: 2%;
  width: 96%;
  height: 72%;
  border: 1px solid #9a9a9a;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const Scriptontainer = styled.div`
  position: absolute;
  bottom: 4%;
  left: 2%;
  width: 84%;
  height: 14%;
  border: 1px solid #9a9a9a;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 3% 4%;
  background-color: white;
  font-size: 2vmin;
`;

const NameContainer = styled.div`
  position: absolute;
  bottom: 11.5%;
  right: 2%;
  width: 11%;
  height: 6.5%;
  border: 1px solid #9a9a9a;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: #424242;
  font-size: 2vmin;
`;

const NextButton = styled.button`
  position: absolute;
  bottom: 4%;
  right: 2%;
  width: 11%;
  height: 6.5%;
  border: 1px solid #9a9a9a;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
  color: #424242;
  font-size: 2vmin;

  &:hover {
    font-weight: 700;
  }
`;

const GameBoard = () => {
  return (
    <GameboardContainer>
      <Titlebar />
      <ECGContainer src="/bom_default.jpg" />
      <Scriptontainer>
        “…있잖아, 왜 발렌타인 데이 선물은 펭귄이 될 수 없을까?”
      </Scriptontainer>
      <NameContainer>2월 15일</NameContainer>
      <NextButton>다음으로 &gt;</NextButton>
    </GameboardContainer>
  );
};

export default GameBoard;
