import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
import styled from 'styled-components/native';

export interface IGridCard {
  imgSource: string;
}
export const GridCardContainer = styled.View`
  background-color: ${Colors.WHITE};
  margin: 7px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;
export const GridCardImage = styled.Image`
  width: 100%;
  height: 120px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;
export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-vertical: 5px;
  background-color: ${Colors.ORANGE};
  border-radius: 5px;
`;
