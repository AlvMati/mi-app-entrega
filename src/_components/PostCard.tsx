import styles from './PostCard.module.css';

type PostCardProps = {
  title: string;
  // description: string;
  src: string;
  comprar: boolean
  precio: number; 
  precioAnterior?: number;
  descuento?: number;
  isInCart?: boolean;
  onToggleCart?: () => void;
};

function PostCard(props: PostCardProps) {
  const { title, src, precio, precioAnterior, descuento,isInCart, onToggleCart} = props;

    return (
    <section>
      <article className={styles.postCard}>
        <img className={styles.img} src={src} alt={title}/>
        <h1 className={styles.title}>{title}</h1>
        {precioAnterior && (
          <p className={styles.precioAnterior}>${precioAnterior}</p>
        )}
        <p className={styles.precio}>${precio}</p>
        {descuento && (
        <p className={styles.descuento}>Descuento: {descuento}% OFF</p>)}
        <p className={styles.cuotas}>en 9 cuotas de ${Math.round(precio / 9)}</p>
        <p className={styles.envio}>Envío gratis</p>
        {/* <p className={styles.description}>{description}</p> */}
        {/* <button className={styles.comprar}>
          {props.comprar ? 'Comprar' : 'Publicación Pausada'}
        </button>  */}
        {/* <button className={styles.cartButton} onClick={onToggleCart}>
          {isInCart ? 'Quitar del carrito' : 'Agregar al carrito'}
        </button> */}
        {/* {(like!>0) && <p className={styles.like}>Le gusta a {like} personas</p>} */}
      </article>
    </section>
  );
}

export default PostCard;
