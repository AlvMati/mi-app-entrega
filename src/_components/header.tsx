import styles from './header.module.css';
import { FiShoppingCart } from 'react-icons/fi';
import { FiBell } from 'react-icons/fi';         
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.tsx'; 


type BusquedaProps = {
    searchTerm: string;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Busqueda({ searchTerm, onSearchChange }: BusquedaProps) {
    return(
        <section className={styles.sectionContainer}> 
            <div className={styles.busquedaContainer}>
                <div className={styles.logoContainer}>
                    <Link to="/">
                    <img className={styles.logo} src='https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.7/mercadolibre/logo__large_plus.png' alt='Mercado Libre Logo' />
                    </Link>
                </div>
                <input className={styles.searchInput} 
                type='text' 
                placeholder='Buscar productos, marcas y más...'
                value={searchTerm}
                onChange={onSearchChange}
                />
                <div className={styles.meli}>
                    <img className={styles.logo} src='https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.7/mercadolibre/logo__large_plus.png' alt='Mercado Libre Logo' />
                </div>
            </div>
        </section>
    )
}


export function Header () {
    const { cartItems } = useCart(); 
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const handleNotAvailable = (feature: string) => {
    alert(`${feature} está en desarrollo`);
    };
    return(
        <header className={styles.header}>
            <nav className={styles.navContainer}>
                <ul className={styles.navListCenter}> 
                    <Link to="/posts"><li className={styles.navItem}>Inicio</li></Link>
                    <button className={styles.navItem} onClick={() => handleNotAvailable("Categorías")}>Categorías</button>
                    <button className={styles.navItem} onClick={() => handleNotAvailable("Ofertas")}>Ofertas</button>
                    <button className={styles.navItem} onClick={() => handleNotAvailable("Cupones")}>Cupones</button>
                    <button className={styles.navItem} onClick={() => handleNotAvailable("Supermercado")}>Supermercado</button>
                    <button className={styles.navItem} onClick={() => handleNotAvailable("Mercado PLAY")}>Mercado PLAY</button>
                    <Link to="/nuevo-producto" className={styles.navItem}>Vender</Link>
                    <button className={styles.navItem} onClick={() => handleNotAvailable("Ayuda")}>Ayuda</button>
                </ul>
                <ul className={styles.navListRight}> 
                    <button className={styles.navItem} onClick={() => handleNotAvailable("Perfil")}>Perfil</button>
                    <Link to="/checkout" className={styles.navItem}>Compras</Link>
                    <li className={styles.navItem}><FiBell /></li>
                    <Link to="/carrito" className={styles.navCarrito}>
                        <FiShoppingCart/>{totalItems> 0 && (
                            <span className={styles.contador}>{totalItems}</span>
                        )}
                    </Link>
                </ul>
            </nav>
        </header>
    )
}