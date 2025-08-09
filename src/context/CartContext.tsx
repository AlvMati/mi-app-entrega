import { createContext, useContext, useState } from "react";
import Posts from "../_pages/Posts";

type CartItem = {
  id: number;
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  isInCart: (id: number) => boolean;
  clearCart: () => void;
  updateQuantity: (id: number, amount: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);


export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  

  const addToCart = (id: number) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === id);
      if (existing) {
        return prev.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { id, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev =>
      prev.filter(item => item.id !== id)
    );
  };

  const isInCart = (id: number) => {
    return cartItems.some(item => item.id === id);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const updateQuantity = (id: number, amount: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: amount } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, isInCart, clearCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
}