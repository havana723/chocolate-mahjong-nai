import styled from "@emotion/styled";
import { IconX } from "@tabler/icons-react";
import { ScriptOption } from "../types/script";

const OptionWindowContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2vmin;
`;

const OptionAlertContainer = styled.div`
  position: relative;
  height: 30%;
  width: 40%;
  border-radius: 0.6vmin;
  border: 1px solid #9a9a9a;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1vmin;
  background-color: white;
`;

const OptionAlertTitleBar = styled.div`
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

const Option = styled.div`
  &:hover {
    font-weight: 700;
    text-decoration: underline;
  }
`;

const OptionWindow = (props: {
  options: ScriptOption[];
  onClickOption: (option: ScriptOption) => void;
}) => {
  const { options, onClickOption } = props;
  return (
    <OptionWindowContainer>
      <OptionAlertContainer>
        <OptionAlertTitleBar>
          / * * /
          <ButtonContainer>
            <IconX size={"2vmin"} />
          </ButtonContainer>
        </OptionAlertTitleBar>
        {options.map((option) => (
          <Option onClick={() => onClickOption(option)}>{option.text}</Option>
        ))}
      </OptionAlertContainer>
    </OptionWindowContainer>
  );
};

export default OptionWindow;
