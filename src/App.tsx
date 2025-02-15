import styled from "@emotion/styled";
import "./App.css";
import GameBoard from "./components/GameBoard";

const Background = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background: black;
  object-fit: contain;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-aspect-ratio: 4/3) {
    padding: 32px;
  }
`;

function App() {
  return (
    <Background>
      <GameBoard />
    </Background>
  );
}

export default App;
