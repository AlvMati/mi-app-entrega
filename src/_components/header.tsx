import styles from './header.module.css';

type HeaderProps = {
    cartCount: number;
};

export function Header ({cartCount}: HeaderProps) {
    return(
        <nav className={styles.navContainer}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>Categorias</li>
                <li className={styles.navItem}>Ofertas</li>
                <li className={styles.navItem}>Cupones</li>
                <li className={styles.navItem}>Supermercado</li>
                <li className={styles.navItem}>Mercado Play</li>
                <li className={styles.navItem}>Vender</li>
                <li className={styles.navItem}>Ayuda</li>
                <li className={styles.navItem}>Mi Perfil</li>
                <li className={styles.navItem}>Mis Compras</li>
                <li className={styles.navCarrito}>
                    🛒 {cartCount > 0 && (<span className="cart-badge">{cartCount}</span>)}
                </li>
            </ul>
       </nav>
    )
}

type BusquedaProps = {
    searchTerm: string;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Busqueda({ searchTerm, onSearchChange }: BusquedaProps) {
    return(
        <section className={styles.sectionContainer}>
            <input className={styles.searchInput} 
            type='text' 
            placeholder='Buscar productos, marcas y más...'
            value={searchTerm}
            onChange={onSearchChange}
            />
            <button className={styles.searchButton}>🔍</button>
        </section>
    )
}

