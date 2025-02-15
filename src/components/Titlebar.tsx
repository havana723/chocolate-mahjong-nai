import styled from "@emotion/styled";
import { IconSquare, IconX } from "@tabler/icons-react";

const TitlebarContainer = styled.div`
  position: relative;
  background-color: #eeeeee;
  width: 100%;
  height: 4%;
  border-bottom: 1px solid #424242;
  border-image: url(https://res.cloudinary.com/dangvxnul/image/upload/v1716309479/paper-border1_rvbod3.png)
    20 fill round;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #424242;
  font-size: 2vmin;
  padding: 0 2vmin;
  font-weight: 600;
`;

const Title = styled.div``;

const ButtonContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const MinimizeButton = styled.div`
  width: 12px;
  height: 4px;
  border-bottom: 2px solid #424242;
`;

const Titlebar = () => {
  return (
    <TitlebarContainer>
      <Title>초콜릿으로는 마작을 칠 수 없어</Title>
      <ButtonContainer>
        <MinimizeButton />
        <IconSquare size={14} />
        <IconX size={16} />
      </ButtonContainer>
    </TitlebarContainer>
  );
};

export default Titlebar;
