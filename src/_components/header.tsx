import styles from './header.module.css';
import { FiSearch } from 'react-icons/fi';     // ícono de búsqueda
import { FiShoppingCart } from 'react-icons/fi'; // ícono de carrito
import { FiBell } from 'react-icons/fi';         // ícono de notificaciones

type HeaderProps = {
    cartCount: number;
};

export function Header ({cartCount}: HeaderProps) {
    return(
        <header className={styles.header}>
            <nav className={styles.navContainer}>
                <div className={styles.logoContainer}>
                    <img className={styles.logo} src='https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.17.7/mercadolibre/logo__large_plus.png' alt='Mercado Libre Logo' />
                </div>
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
                    <li className={styles.navItem}>COMPRAS</li>
                    <li className={styles.navItem}><FiBell /></li>
                    <li className={styles.navCarrito}>
                        <FiShoppingCart/>{cartCount > 0 && (<span className={styles.contador}>{cartCount}</span>)}
                    </li>
                </ul>
            </nav>
        </header>
    )
}

type BusquedaProps = {
    searchTerm: string;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Busqueda({ searchTerm, onSearchChange }: BusquedaProps) {
    return(
        <section className={styles.sectionContainer}>
            <div className={styles.busquedaContainer}>
                <input className={styles.searchInput} 
                type='text' 
                placeholder='Buscar productos, marcas y más...'
                value={searchTerm}
                onChange={onSearchChange}
                />
                <button className={styles.searchButton}><FiSearch /></button>
            </div>
        </section>
    )
}

