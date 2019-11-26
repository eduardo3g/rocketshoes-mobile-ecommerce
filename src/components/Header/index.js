import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import PropTypes from 'prop-types';
import {
  Container,
  Logo,
  BasketContainer,
  ItemCount,
  LogoContainer,
} from './styles';

export default function Header({ navigation }) {
  Header.propTypes = {
    navigation: PropTypes.shape().isRequired,
  };

  console.tron.log('NAVIGATION', navigation);

  return (
    <Container>
      <LogoContainer onPress={() => navigation.navigate('Main')}>
        <Logo />
      </LogoContainer>
      <BasketContainer onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        <ItemCount>2</ItemCount>
      </BasketContainer>
    </Container>
  );
}

// export default Header;
