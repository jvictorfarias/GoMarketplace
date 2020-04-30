import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

interface CartContext {
  products: Product[];
  addToCart(item: Product): void;
  increment(id: string): void;
  decrement(id: string): void;
}
const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const savedProducts = await AsyncStorage.getItem(
        '@GoMarketplace:products',
      );

      if (savedProducts && !products) {
        const parsedProducts: Product[] = JSON.parse(savedProducts);
        setProducts(parsedProducts);
      }

      !!products &&
        (await AsyncStorage.setItem(
          '@GoMarketplace:products',
          JSON.stringify(products),
        ));
    }

    loadProducts();
  }, [products]);

  const addToCart = useCallback(
    async (product: Product) => {
      setProducts([...products, product]);
    },
    [products],
  );

  const increment = useCallback(
    async id => {
      const index = products.findIndex(product => product.id === id);
      const newProductWatcher = products;

      newProductWatcher[index] = {
        ...newProductWatcher[index],
        quantity: newProductWatcher[index].quantity += 1,
      };

      setProducts(newProductWatcher);
    },
    [products],
  );

  const decrement = useCallback(
    async id => {
      const index = products.findIndex(product => product.id === id);
      const newProductWatcher = products;

      newProductWatcher[index] = {
        ...newProductWatcher[index],
        quantity: newProductWatcher[index].quantity -= 1,
      };

      setProducts(newProductWatcher);
    },
    [products],
  );

  const value = React.useMemo(
    () => ({ addToCart, increment, decrement, products }),
    [products, addToCart, increment, decrement],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
