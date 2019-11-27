import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  padding: 20px 10px;
  background: #fff;
  border-radius: 4px;
  margin: 15px;
`;

export const Products = styled.View``;
export const Product = styled.View``;

export const ProductInfos = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;
export const ProductDetailed = styled.View`
  flex: 1;
  margin-left: 15px;
  padding: 10px;
`;
export const ProductTitle = styled.Text`
  font-size: 15px;
`;
export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 3px;
`;
export const ProductDeletion = styled.TouchableOpacity`
  padding: 6px;
`;
export const ProductIncrementDecrement = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  background-color: #eee;
  padding: 8px;
`;
export const ProductControlButton = styled.TouchableOpacity``;

export const ProductAmount = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  padding: 5px;
  border-radius: 4px;
  margin: 0 5px;
  border: 1px solid #ddd;
  min-width: 50px;
  text-align: center;
`;
export const ProductSubtotal = styled.Text`
  flex: 1;
  font-weight: bold;
  font-size: 16px;
  text-align: right;
`;
export const TotalContainer = styled.View`
  margin-top: 30px;
`;
export const TotalText = styled.Text`
  font-weight: bold;
  text-align: center;
  color: #999;
`;
export const Order = styled.TouchableOpacity`
  background: ${colors.primary};
  padding: 12px;
  border-radius: 4px;
`;
export const OrderText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
`;
export const TotalAmount = styled.Text`
  font-weight: bold;
  text-align: center;
  font-size: 32px;
  margin-top: 5px;
  margin-bottom: 30px;
`;

export const EmptyCart = styled.View`
  align-items: center;
  justify-content: center;
`;

export const EmptyCartText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 18px;
`;
