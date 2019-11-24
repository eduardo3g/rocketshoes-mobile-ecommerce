import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Wrapper, Container, Logo, BasketContainer, ItemCount } from './styles';

// eslint-disable-next-line react/prop-types
function Header({ navigation }) {
  console.tron.log('NAVIGATION', navigation);

  return (
    <Wrapper>
      <Container>
        <Logo />
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>2</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}

export default Header;
