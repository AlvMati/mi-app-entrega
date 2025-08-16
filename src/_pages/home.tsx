import { useQuery } from '@tanstack/react-query';
import { productService } from '../services/productService';
import { Link } from "react-router-dom";
import styles from './home.module.css';

function Home() {
  const { data: allProducts, isLoading, error } = useQuery({
    queryKey: ['Products'],
    queryFn: () => productService.getAllProducts()
  });

  if (isLoading) return <p>Cargando productos...</p>;
  if (error) return <p>Error al cargar los productos</p>;

  const featuredProducts = (allProducts ?? []).filter(p => p.featured);

  return (
    <div className={styles.Container}>
      <h1 className={styles.title}>Bienvenido a nuestra tienda online</h1>
      <p className={styles.subTitle}>Descubrí las mejores ofertas y productos recomendados.</p>
      <Link to="/posts" className={styles.Back}>Ir a productos</Link>

      <h2 className={styles.sectionTitle}>Productos destacados</h2>
      <div className={styles.productGrid}>
        {featuredProducts.map((prod) => (
          <div key={prod.id} className={styles.productCard}>
            <img src={prod.image} alt={prod.title} />
            <h3>{prod.title}</h3>
            <p>${prod.price.toLocaleString()}</p>
            <Link to={`/posts/${prod.id}`} className={styles.detalle}>Ver detalle</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;