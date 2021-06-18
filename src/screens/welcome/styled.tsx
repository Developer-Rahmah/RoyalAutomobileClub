import { Dimensions } from 'react-native';
import { Colors } from 'RoyalAutomobileClub/assets/styles/Colors';
import { SCREEN_HEIGHT } from 'RoyalAutomobileClub/src/services/helper/Constant';
import styled from 'styled-components/native';

export interface ILangProps {
  isSelected;
}
export interface IButtonProps {
  onPress: () => void;
  isSelected: boolean;
}

export const ContainerView = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 5%;
`;
export const WelcomeContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 15%;
  padding-top: 20%;
`;
export const ChooseYourLanguageContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: ${SCREEN_HEIGHT / 20}px;
`;
export const WelcomeOnBoardContainer = styled.View`
  padding-bottom: 3%;
`;
export const RadioBtnSelectLangContainer = styled.TouchableOpacity<ILangProps>`
  border-width: 1px;
  border-color: ${(props) =>
    props.isSelected ? Colors.ORANGE : Colors.LIGHT_GRAY};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-vertical: ${SCREEN_HEIGHT / 70}px;
  padding-horizontal: ${SCREEN_HEIGHT / 30}px;
  border-radius: 5px;
`;
export const FlagAndLangContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 40%;
`;
export const RadioBtnContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 60%;
`;
export const TopPadding = styled.View`
  padding-top: 4%;
`;
export const LangImgContainer = styled.View`
  padding-bottom: 17%;
`;


export const Skip: React.FC<IButtonProps> = (props) => {
  return (
    <>
      <RadioBtnSelectLangContainer
        isSelected={props.isSelected}
        onPress={() => props.onPress}
      />
    </>
  );
};
