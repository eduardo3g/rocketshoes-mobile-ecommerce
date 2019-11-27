import React from 'react';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import PropTypes from 'prop-types';
import {
  Container,
  Logo,
  BasketContainer,
  ItemCount,
  LogoContainer,
} from './styles';

function Header({ navigation, cartSize }) {
  Header.propTypes = {
    navigation: PropTypes.shape().isRequired,
  };

  return (
    <Container>
      <LogoContainer onPress={() => navigation.navigate('Main')}>
        <Logo />
      </LogoContainer>
      <BasketContainer onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        <ItemCount>{cartSize}</ItemCount>
      </BasketContainer>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
