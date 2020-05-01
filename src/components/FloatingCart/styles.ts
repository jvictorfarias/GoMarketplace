import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  bottom: 0px;

  flex-direction: row;
  background: #e83f5b;

  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
`;

export const CartPricing = styled.Text`
  font-family: 'Roboto-Regular';
  padding: 20px;
`;

export const CartTotalPrice = styled.Text`
  font-size: 20px;
  color: #fff;
  font-family: 'Roboto-Medium';
  font-weight: bold;
`;

export const CartButton = styled.TouchableOpacity`
  flex-direction: row;
  background: #e83f5b;

  flex: 1;
  padding: 20px 20px;
  justify-content: space-between;
  align-items: center;
`;

export const CartButtonText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 14px;
  color: #fff;
  margin-left: 15px;
  flex: 1;
  margin-right: auto;
  font-weight: bold;
`;
