import styles from './header.module.css';
import { FiSearch } from 'react-icons/fi';     // ícono de búsqueda
import { FiShoppingCart } from 'react-icons/fi'; // ícono de carrito
import { FiBell } from 'react-icons/fi';         // ícono de notificaciones
import { Link } from 'react-router-dom';


type BusquedaProps = {
    searchTerm: string;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Busqueda({ searchTerm, onSearchChange }: BusquedaProps) {
    return(
        <section className={styles.sectionContainer}> 
            <div className={styles.busquedaContainer}>
                <div className={styles.logoContainer}>
                    <Link to="/posts">
                    <img className={styles.logo} src='https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.7/mercadolibre/logo__large_plus.png' alt='Mercado Libre Logo' />
                    </Link>
                </div>
                <input className={styles.searchInput} 
                type='text' 
                placeholder='Buscar productos, marcas y más...'
                value={searchTerm}
                onChange={onSearchChange}
                />
                    
                {/* <button className={styles.searchButton}><FiSearch /></button> */}
                <div className={styles.meli}>
                    <img className={styles.logo} src='https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.7/mercadolibre/logo__large_plus.png' alt='Mercado Libre Logo' />
                </div>
            </div>
        </section>
    )
}
            

type HeaderProps = {
    cartCount: number;
};

export function Header ({cartCount}: HeaderProps) {
    return(
        <header className={styles.header}>
            <nav className={styles.navContainer}>
                <ul className={styles.navListCenter}> 
                    <li className={styles.navItem}>CATEGORIAS</li>
                    <li className={styles.navItem}>OFERTAS</li>
                    <li className={styles.navItem}>CUPONES</li>
                    <li className={styles.navItem}>SUPERMERCADO</li>
                    <li className={styles.navItem}>MERCADO PLAY</li>
                    <li className={styles.navItem}>VENDER</li>
                    <li className={styles.navItem}>AYUDA</li>
                </ul>
                <ul className={styles.navListRight}> 
                    <li className={styles.navItem}>MI PERFIL</li>
                    <Link to="/checkout" className={styles.navItem}>COMPRAS</Link>
                    <li className={styles.navItem}><FiBell /></li>
                    <Link to="/carrito" className={styles.navCarrito}>
                        <FiShoppingCart/>{cartCount > 0 && (<span className={styles.contador}>{cartCount}</span>)}
                    </Link>
                </ul>
            </nav>
        </header>
    )
}