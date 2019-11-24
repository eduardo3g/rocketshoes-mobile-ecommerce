import styled from 'styled-components/native';
import { darken } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.View`
  /* margin-top: 50px; */
  background: ${colors.dark};
`;

export const Product = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  width: 220px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;
export const ProductTitle = styled.Text`
  font-size: 16px;
  /* font-weight: bold; */
`;
export const ProductPrice = styled.Text`
  font-size: 20px;
  /* margin-bottom: 14px; */
  margin: 14px 0;
  font-weight: bold;
`;
export const AddButton = styled.TouchableOpacity`
  background-color: ${colors.dark};
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;
export const ProductAmount = styled.View`
  padding: 12px;
  background: ${darken(0.03, colors.primary)};

  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  flex-direction: row;
  align-items: center; /* Vertical */
`;
export const ProductAmountText = styled.Text`
  color: #fff;
  margin: 0 4px 0 10px;
`;
export const AddButtonText = styled.Text`
  flex: 1;
  color: #fff;
  text-align: center;
  font-weight: bold;
`;
