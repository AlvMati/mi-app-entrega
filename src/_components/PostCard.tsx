import styles from './PostCard.module.css';

type PostCardProps = {
  title: string;
  description: string;
  src: string;
  like?: number;
  precio: number; 
  comprar: boolean
  isInCart?: boolean;
  onToggleCart?: () => void;
};

function PostCard(props: PostCardProps) {
  const { title, description, src, like, precio, isInCart, onToggleCart} = props;

    return (
    <section>
      <article className={styles.postCard}>
        <img className={styles.img} src={src}/>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <button className={styles.comprar}>
          {props.comprar ? 'Comprar' : 'Publicación Pausada'}
        </button> 
        <button className={styles.cartButton} onClick={onToggleCart}>
          {isInCart ? 'Quitar del carrito' : 'Agregar al carrito'}
        </button>
        <p className={styles.precio}>${precio}</p>
        {(like!>0) && <p className={styles.like}>Le gusta a {like} personas</p>}
      </article>
    </section>
  );
}

export default PostCard;
