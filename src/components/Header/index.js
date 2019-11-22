import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Wrapper, Container, Logo, BasketContainer, ItemCount } from './styles';

// eslint-disable-next-line react/prop-types
function Header({ navigation }) {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>3</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}

export default Header;
