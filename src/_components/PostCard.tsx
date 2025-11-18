import { Link } from 'react-router-dom';
import styles from './PostCard.module.css';

type PostCardProps = {
  title: string;
  id?: number;
  src: string;
  color: string | string[];
  precio: number; 
  precioAnterior?: number;
  descuento?: number;
  isInCart?: boolean;
  onToggleCart?: () => void;
};

function PostCard(props: PostCardProps) {
  const { id, title, src, precio, precioAnterior, descuento, color} = props;

    return (
    <section>
      <article className={styles.postCard}>
        <Link to={`/posts/${id}`} className={styles.link}>
          <img className={styles.img} src={src} alt={title}/>
          <h1 className={styles.title}>{title}</h1>
          {precioAnterior && (
            <p className={styles.precioAnterior}>${precioAnterior}</p>
          )}
          <p className={styles.precio}>${precio}</p>
          <p className={styles.color}>Color: {color}</p>
          {descuento && (
          <p className={styles.descuento}>Descuento: {descuento}% OFF</p>)}
          <p className={styles.cuotas}>en 9 cuotas de ${Math.round(precio / 9)}</p>
          <p className={styles.envio}>Envío gratis</p>
        </Link>
      </article>
    </section>
  );
}

export default PostCard;
