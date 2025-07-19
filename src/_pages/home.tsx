import { Link } from "react-router-dom";
import styles from './home.module.css';

const productosDestacados = [
  {
    id: 1,
    nombre: 'Heladera LG Inverter',
    precio: 499999,
    src: './../public/HeladeraLGinverter.jpg', // Assuming the image is in the public folder
  },
  {
    id: 2,
    nombre: 'Lavarropas Samsung 8kg',
    precio: 389999,
    src: './../public/Lavarropas_Samsung_8kg.jpg',
  },
  {
    id: 3,
    nombre: 'Cocina Whirlpool',
    precio: 279999,
    src: './../public/Cocina_Whirlpool.webp'
  },
  {
    id: 4,
    nombre: 'Aire acondicionado BGH',
    precio: 319999,
    src: './../public/Aire_acondicionado_BGH.webp'
  },
  {
    id: 5,
    nombre: 'Lavarropas Philco',
    precio: 319999,
    src: './../public/philco.webp'
  },
  {
    id: 6,
    nombre: 'Smart Tv 55" Samsung',
    precio: 319999,
    src: './../public/Smart.webp'
  },
  {
    id: 7,
    nombre: 'Lavarropas Whirlpool',
    precio: 319999,
    src: './../public/WHIRLPOOL.webp'
  }
];


function Home() {
    return (
        <div className={styles.Container}>
            <h1 className={styles.title}>Bienvenido a nuestra tienda online</h1>
            <p className={styles.subTitle}>Descubrí las mejores ofertas y productos recomendados.</p>
            <Link to="/posts" className={styles.Back}>Ir a productos</Link>

            <h2 className={styles.sectionTitle}>Productos destacados</h2>
            <div className={styles.productGrid}>{productosDestacados.map((prod) => (
              <div key={prod.id} className={styles.productCard}>
                <img src={prod.src} alt={prod.nombre} />
                <h3>{prod.nombre}</h3>
                <p>${prod.precio.toLocaleString()}</p>
                <Link to={`/producto/${prod.id}`} className={styles.detalle}>Ver detalle</Link>
              </div>
        ))}</div>
        </div>
    );
}
export default Home;

