import styled from "@emotion/styled";
import { IconSquare, IconX } from "@tabler/icons-react";

const TitlebarContainer = styled.div`
  position: relative;
  background-color: #eeeeee;
  width: 100%;
  height: 4%;
  border-bottom: 1px solid #9a9a9a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #424242;
  font-size: 2vmin;
  padding: 0 2vmin;
  font-weight: 600;
  border-top-right-radius: 0.6vmin;
  border-top-left-radius: 0.6vmin;
`;

const Title = styled.div``;

const ButtonContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2vmin;
`;

const MinimizeButton = styled.div`
  width: 1.4vmin;
  height: 0.4vmin;
  border-bottom: 0.3vmin solid #424242;
`;

const Titlebar = () => {
  return (
    <TitlebarContainer>
      <Title>초콜릿으로는 마작을 칠 수 없어</Title>
      <ButtonContainer>
        <MinimizeButton />
        <IconSquare size={"1.6vmin"} />
        <IconX size={"2vmin"} />
      </ButtonContainer>
    </TitlebarContainer>
  );
};

export default Titlebar;
