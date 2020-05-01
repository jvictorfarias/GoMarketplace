import React, { useState, useEffect, useCallback } from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import RNBootSplash from 'react-native-bootsplash';

import { View } from 'react-native';

import formatValue from '../../utils/formatValue';
import { useCart } from '../../hooks/cart';
import api from '../../services/api';

import FloatingCart from '../../components/FloatingCart';

import {
  Container,
  ProductContainer,
  ProductImage,
  ProductList,
  Product,
  ProductTitle,
  PriceContainer,
  ProductPrice,
  ProductButton,
} from './styles';

export interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
}

const Dashboard: React.FC = () => {
  const { addToCart, loaded } = useCart();

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const { data } = await api.get<Product[]>('/products');
      setProducts(data);
    }

    loadProducts();
  }, []);

  useEffect(() => {
    loaded && RNBootSplash.hide({ duration: 250 });
  }, [loaded]);

  const handleAddToCart = useCallback(
    (item: Omit<Product, 'quantity'>) => {
      addToCart({
        id: item.id,
        title: item.title,
        image_url: item.image_url,
        price: item.price,
      });
    },
    [addToCart],
  );

  return (
    <Container>
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={item => item.id}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: 80,
          }}
          renderItem={({ item }) => (
            <Product>
              <ProductImage source={{ uri: item.image_url }} />
              <ProductTitle>{item.title}</ProductTitle>
              <PriceContainer>
                <ProductPrice>{formatValue(item.price)}</ProductPrice>
                <ProductButton
                  testID={`add-to-cart-${item.id}`}
                  onPress={() => handleAddToCart(item)}
                >
                  <FeatherIcon
                    size={20}
                    name="plus"
                    color="#C4C4C4"
                    style={{ marginLeft: 5 }}
                  />
                </ProductButton>
              </PriceContainer>
            </Product>
          )}
        />
      </ProductContainer>
      <FloatingCart />
    </Container>
  );
};

export default Dashboard;
