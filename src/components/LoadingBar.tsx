import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const LoadingBarContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4vmin;
  font-size: 2vmin;
`;

const LoadingBarBox = styled.div`
  position: relative;
  width: 24%;
  height: 2%;
  border: 1px solid #9a9a9a;
  background-color: #ffffff;
`;

const LoadingBarState = styled.div<{ $width: string }>`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${(props) => props.$width};
  background-color: #b4b4b4;
`;

const loadingState = [
  { text: "Loading", percentage: "27%" },
  { text: "Loading .", percentage: "31%" },
  { text: "Loading . .", percentage: "36%" },
  { text: "Loading . . .", percentage: "76%" },
  { text: "Loading . . .", percentage: "98%" },
];

const LoadingBar = (props: { onFinish: () => void; imagesLoaded: boolean }) => {
  const { onFinish, imagesLoaded } = props;

  const [currentState, setCurrentState] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentState === loadingState.length - 1) {
        if (imagesLoaded) {
          onFinish();
          clearInterval(interval);
        }
        return;
      } else {
        setCurrentState((prev) => (prev + 1) % loadingState.length);
      }
    }, 600);

    return () => clearInterval(interval);
  }, [currentState, imagesLoaded, onFinish]);

  return (
    <LoadingBarContainer>
      <LoadingBarBox>
        <LoadingBarState $width={loadingState[currentState].percentage} />
      </LoadingBarBox>
      {loadingState[currentState].text}
    </LoadingBarContainer>
  );
};

export default LoadingBar;
