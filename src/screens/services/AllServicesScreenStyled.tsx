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
