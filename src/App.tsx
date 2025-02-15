import styled from "@emotion/styled";
import "./App.css";
import GameBoard from "./components/GameBoard";

const Background = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  object-fit: contain;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ffe6e6;
  opacity: 0.8;
  background-image: radial-gradient(#ff8d8d 1px, transparent 1px),
    radial-gradient(#ffacac 1px, #ffe6e6 1px);
  background-size: 40px 40px;
  background-position: 0 0, 10px 10px;

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
