import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const ProductContainer = styled.View`
  border-radius: 5px;
  margin-top: 60px;
  flex: 1;
  flex-direction: row;
`;

export const ProductList = styled(FlatList)`
  flex: 1;
  padding: 0 10px;
`;

export const Product = styled.View`
  background: #fff;
  padding: 15px 10px;
  border-radius: 5px;
  margin: 5px;
  flex-direction: row;
`;

export const ProductImage = styled.Image`
  height: 92px;
  width: 92px;
`;

export const ProductTitleContainer = styled.View`
  font-size: 16px;
  margin-left: 5px;
`;

export const ProductTitle = styled.Text`
  max-width: 120px;
  font-family: 'Roboto-Regular';
  line-height: 20px;
  font-size: 14px;
  color: #3d3d4d;
`;

export const ProductPriceContainer = styled.View`
  flex-direction: column;
`;

export const TotalContainer = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

export const ProductSinglePrice = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 12px;
  color: #a0a0b3;
  margin-top: 8px;
`;

export const ProductPrice = styled.Text`
  font-family: 'Roboto-Medium';
  margin-top: 5px;
  font-size: 16px;
  color: #e83f5b;
  font-weight: bold;
`;

export const ProductQuantity = styled.Text`
  font-family: 'Roboto-Medium';
  margin-top: 5px;
  margin-right: 10px;

  font-size: 16px;
  color: #e83f5b;
  font-weight: bold;
`;

export const ActionContainer = styled.View`
  align-self: flex-end;
  align-items: center;
  justify-content: space-between;

  margin-left: auto;
`;

export const ActionButton = styled.TouchableOpacity`
  background: rgba(232, 63, 91, 0.1);
  border-radius: 5px;
  padding: 12px;
  margin-bottom: 5px;
`;

export const TotalProductsContainer = styled.View`
  position: absolute;
  bottom: 0px;

  flex-direction: row;
  background: #e83f5b;

  padding: 20px 40px;
  justify-content: space-between;
  align-items: center;
`;

export const TotalProductsText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 16px;
  color: #fff;
  margin-left: 15px;
  font-weight: bold;

  flex: 1;
`;

export const SubtotalValue = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;
