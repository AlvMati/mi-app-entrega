import { useParams } from "react-router-dom";
import { allProducts } from "./Posts";
import styles from './PostDetail.module.css';
import { Link } from "react-router-dom";


function PostDetail() {
    const { id } = useParams<{ id: string }>();
    const post = allProducts.find((p) => p.id === Number(id));

    if (!post) {
        return <div>Post not found</div>;
    }
    
    return (
    <div className={styles.detalleContainer}>
        <img className={styles.img} src={post.src} alt={post.title} />
        <div className={styles.detalleInfo}>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <p className={styles.precio}>Precio: ${post.precio}</p>
            <Link to="/checkout">
                <button className={styles.compra}>Comprar ahora</button>
            </Link>
            <Link to="/carrito">
                <button className={styles.carrito}>Agregar al carrito</button>
            </Link>
        </div>
        <Link to="/posts">Atras</Link>
        </div>
    );
}
export default PostDetail;