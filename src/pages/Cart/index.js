import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Products,
  Product,
  ProductInfos,
  ProductImage,
  ProductDetailed,
  ProductTitle,
  ProductPrice,
  ProductDeletion,
  ProductIncrementDecrement,
  ProductControlButton,
  ProductAmount,
  ProductSubtotal,
  TotalContainer,
  TotalText,
  TotalAmount,
  Order,
  OrderText,
} from './styles';
import colors from '../../styles/colors';

export default function Cart() {
  return (
    <Container>
      <Products>
        <Product>
          <ProductInfos>
            <ProductImage
              source={{
                uri:
                  'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
              }}
            />
            <ProductDetailed>
              <ProductTitle>Tênis de caminhada leve</ProductTitle>
              <ProductPrice>R$ 199,90</ProductPrice>
            </ProductDetailed>
            <ProductDeletion>
              <Icon name="delete-forever" size={24} color={colors.primary} />
            </ProductDeletion>
          </ProductInfos>
          <ProductIncrementDecrement>
            <ProductControlButton>
              <Icon
                name="remove-circle-outline"
                size={20}
                color={colors.primary}
              />
            </ProductControlButton>
            <ProductAmount value="2" />
            <ProductControlButton>
              <Icon
                name="add-circle-outline"
                size={20}
                color={colors.primary}
              />
            </ProductControlButton>
            <ProductSubtotal>R$ 1.250,00</ProductSubtotal>
          </ProductIncrementDecrement>
        </Product>
      </Products>
      <TotalContainer>
        <TotalText>TOTAL</TotalText>
        <TotalAmount>R$ 1250,00</TotalAmount>
        <Order>
          <OrderText>FINALIZAR PEDIDO</OrderText>
        </Order>
      </TotalContainer>
    </Container>
  );
}
