import styled from "@emotion/styled";
import { useCallback, useEffect, useState } from "react";
import { threeCombination } from "../scripts/threeCombination";
import ChapterTitle from "./ChapterTitle";
import LoadingBar from "./LoadingBar";
import Titlebar from "./Titlebar";

const GameboardContainer = styled.div`
  aspect-ratio: 4 / 3;
  background-color: white;
  position: relative;
  user-select: none;
  word-break: keep-all;
  border-radius: 0.6vmin;
  border: 1px solid #9a9a9a;
  display: flex;
  align-items: center;
  justify-content: center;

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

const DefaultECGContainer = styled.video`
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

const chapter = threeCombination;
const states = ["LOADING", "TITLE", "SCRIPT"];

const GameBoard = () => {
  const script = chapter.texts;

  const [currentState, setCurrentState] = useState<number>(0);
  const [currentLine, setCurrentLine] = useState<number>(0);

  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadImage = (src: string) => {
      return new Promise((resolve, reject) => {
        const loadImage = new Image();
        loadImage.src = src;
        // wait 2 seconds to simulate loading time
        loadImage.onload = () =>
          setTimeout(() => {
            resolve(src);
          }, 2000);

        loadImage.onerror = (err) => reject(err);
      });
    };

    Promise.all(chapter.images.map((image) => loadImage(image)))
      .then(() => setImagesLoaded(true))
      .catch((err) => console.log("Failed to load images", err));
  }, []);

  const getNextState = useCallback(
    () => setCurrentState((prev) => (prev + 1) % states.length),
    []
  );

  const handleClickNextButton = useCallback(() => {
    if (currentLine === script.length - 1) {
      getNextState();
      setCurrentLine(0);
    } else {
      setCurrentLine((prev) => (prev + 1) % script.length);
    }
  }, [currentLine, getNextState, script.length]);

  return (
    <GameboardContainer>
      <Titlebar />
      {states[currentState] === "LOADING" && (
        <LoadingBar onFinish={getNextState} imagesLoaded={imagesLoaded} />
      )}
      {states[currentState] === "TITLE" && (
        <ChapterTitle title={chapter.title} onClickNext={getNextState} />
      )}
      {states[currentState] === "SCRIPT" && (
        <>
          <ECGContainer src={chapter.default_image} />
          <DefaultECGContainer playsInline autoPlay muted loop>
            <source src={chapter.default_video} type="video/mp4" />
          </DefaultECGContainer>
          <ChapterContainer>{chapter.title}</ChapterContainer>
          <Scriptontainer>{script[currentLine].text}</Scriptontainer>
          <NameContainer>{chapter.date}</NameContainer>
          <NextButton onClick={handleClickNextButton}>다음으로 &gt;</NextButton>
        </>
      )}
    </GameboardContainer>
  );
};

export default GameBoard;
