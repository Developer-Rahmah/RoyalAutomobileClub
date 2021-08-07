import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
import styled from 'styled-components/native';
import { SCREEN_HEIGHT } from '../services/helper/Constant';

export interface IGridCard {
  imgSource: string;
}
export const GridCardContainer = styled.View`
  background-color: ${Colors.WHITE};
  margin: 7px;
  justify-content: center;
  align-items: center;
  height: ${SCREEN_HEIGHT / 3.1};
  border-radius: 15px;
`;

export const GridCardContainerService = styled.View`
  background-color: ${Colors.WHITE};
  margin: 7px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;
export const ColumnCardContainer = styled.View`
  background-color: ${Colors.WHITE};
  margin: 7px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  flex-direction: row;
  border_color: ${Colors.LIGHT_GRAY_2};
  border-width: 1px;
`;
export const GridCardImage = styled.Image`
  width: 100%;
  height: 120px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;
export const ColumnCardImage = styled.Image`
  width: 100%;
  height: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 10px;
  flex: 0.8;
`;
export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-vertical: 5px;
  background-color: ${Colors.ORANGE};
  border-radius: 5px;
`;
