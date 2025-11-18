
import { useParams, Link } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import { productService } from '../services/productService';
import { useCart } from "../context/CartContext";
import styles from './PostDetail.module.css';


function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const { addToCart, removeFromCart, isInCart } = useCart();

  const {
    data: post,
    isLoading,
    error
} = useQuery({
  queryKey: ['product', id],
  queryFn: () => productService.getProductById(id!),
  enabled: !!id,
});

  if (isLoading) return <p>Cargando producto...</p>;
  if (error) return <p>Error al cargar producto</p>;
  if (!post) return <p>Producto no encontrado</p>;

  return (
    <div className={styles.detalleContainer}>
      <img className={styles.img} src={post.image} alt={post.title} />
      <div className={styles.detalleInfo}>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <p className={styles.precio}>Precio: ${post.price}</p>
        <div className={styles.botones}>
          <Link to="/checkout">
            <button className={styles.compra}>Comprar ahora</button>
          </Link>
          {isInCart(post.id) ? (
            <button onClick={() => removeFromCart(post.id)} className={styles.carrito}>
              Eliminar del carrito
            </button>
          ) : (
            <button onClick={() => addToCart(post.id)} className={styles.carrito}>
              Agregar al carrito
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default PostDetail;