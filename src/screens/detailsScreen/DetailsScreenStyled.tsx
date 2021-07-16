import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
import styled from 'styled-components/native';

export interface IOrangeIndicatorProps {
  width: string;
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
export const PosterImage = styled.Image`
  width: 100%;
  height: 205px;
`;
export const ShareButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-vertical: 5px;
  background-color: ${Colors.ORANGE};
  border-radius: 5px;
  padding-vertical: 13px;
`;
