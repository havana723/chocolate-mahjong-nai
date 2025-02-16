import styled from "@emotion/styled";
import { IconX } from "@tabler/icons-react";

const ChapterTitleContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2vmin;
`;

const ChapterAlertContainer = styled.div`
  position: relative;
  height: 30%;
  width: 40%;
  border-radius: 0.6vmin;
  border: 1px solid #9a9a9a;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChapterAlertTitleBar = styled.div`
  position: absolute;
  height: 12%;
  width: 100%;
  top: 0;
  background-color: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #424242;
  font-size: 2vmin;
  padding: 0 2vmin;
  font-weight: 600;
  border-bottom: 1px solid #9a9a9a;
  border-top-right-radius: 0.6vmin;
  border-top-left-radius: 0.6vmin;
`;

const ButtonContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2vmin;
`;

const NextButton = styled.button`
  position: absolute;
  bottom: 6%;
  width: 24%;
  height: 16%;
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

const ChapterTitle = (props: { title: string; onClickNext: () => void }) => {
  const { title, onClickNext } = props;
  return (
    <ChapterTitleContainer>
      <ChapterAlertContainer>
        <ChapterAlertTitleBar>
          / * * /
          <ButtonContainer>
            <IconX size={"2vmin"} />
          </ButtonContainer>
        </ChapterAlertTitleBar>
        &lt;{title}&gt;을(를) 실행합니다.
        <NextButton onClick={onClickNext}>Yes</NextButton>
      </ChapterAlertContainer>
    </ChapterTitleContainer>
  );
};

export default ChapterTitle;
