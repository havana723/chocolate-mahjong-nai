import styled from "@emotion/styled";
import { useCallback, useState } from "react";
import { chapter1 } from "../scripts/chapter01";
import Titlebar from "./Titlebar";

const GameboardContainer = styled.div`
  aspect-ratio: 4 / 3;
  background-color: white;
  position: relative;
  user-select: none;
  word-break: keep-all;
  border-radius: 0.6vmin;
  border: 1px solid #9a9a9a;

  @media (min-aspect-ratio: 4/3) {
    height: 100%;
  }
  @media (max-aspect-ratio: 4/3) {
    width: 100%;
  }
`;

const ChapterContainer = styled.div`
  position: absolute;
  top: 6%;
  left: 1%;
  width: 24%;
  height: 4%;
  border: 1px solid #9a9a9a;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  font-size: 2vmin;
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
  const script = chapter1.texts;

  const [currentLine, setCurrentLine] = useState<number>(0);

  const handleClickNext = useCallback(
    () => setCurrentLine((prev) => (prev + 1) % script.length),
    [script.length]
  );

  return (
    <GameboardContainer>
      <Titlebar />
      <ECGContainer src="bom_default.jpg" />
      <ChapterContainer>{chapter1.title}</ChapterContainer>
      <Scriptontainer>{script[currentLine].text}</Scriptontainer>
      <NameContainer>2월 15일</NameContainer>
      <NextButton onClick={handleClickNext}>다음으로 &gt;</NextButton>
    </GameboardContainer>
  );
};

export default GameBoard;
