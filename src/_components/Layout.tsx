import { Outlet } from "react-router-dom";
import { Header, Busqueda } from "./header.tsx";
import { useState } from 'react';

function Layout() {
  const [searchTerm, serSearchTerm] = useState('');

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>){
    serSearchTerm(e.target.value);
  }
  
  return (
    <>
      <Busqueda 
      searchTerm={searchTerm} 
      onSearchChange={handleSearchChange}
      />
      <Header/>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
    