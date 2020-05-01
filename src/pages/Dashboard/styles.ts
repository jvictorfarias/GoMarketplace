import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Product as FlatListItem } from './index';

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

export const ProductList = styled(
  FlatList as new () => FlatList<FlatListItem>,
).attrs({
  numColumns: 2,
})`
  flex: 1;
  padding: 0 10px;
`;

export const Product = styled.View`
  background: #fff;
  padding: 16px 16px;
  border-radius: 5px;
  margin: 8px;
  flex: 1;
`;

export const ProductImage = styled.Image`
  height: 122px;
  width: 122px;
  align-self: center;
`;

export const ProductTitle = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 14px;
  margin-top: 10px;
  line-height: 20px;
  color: #3d3d4d;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  margin-top: auto;
`;

export const ProductPrice = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 15px;
  font-weight: bold;
  color: #e83f5b;
`;

export const ProductButton = styled.TouchableOpacity``;
