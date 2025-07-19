import { Outlet } from "react-router-dom";
import { Header, Busqueda } from "./header.tsx";
import { useState } from 'react';

function Layout() {
  const [cartItems, setCartItems] = useState<number[]>([]);
  const [searchTerm, serSearchTerm] = useState('');

  function handleToggleCartItem(id: number) {
    // Si el id ya está en el carrito, lo eliminamos
    if (cartItems.includes(id)) {
      setCartItems(cartItems.filter(itemId => itemId !== id));
    } else {
      setCartItems([...cartItems, id]);
    }
  }

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>){
    serSearchTerm(e.target.value);
  }
  
  return (
    
    <>
      <Busqueda 
      searchTerm={searchTerm} 
      onSearchChange={handleSearchChange}
      />
      <Header cartCount={cartItems.length}/>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;