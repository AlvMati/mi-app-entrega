import { useQuery } from '@tanstack/react-query';
import { productService } from '../services/productService';
import { useCart } from "../context/CartContext";
import styles from './carrito.module.css';
import { Link } from "react-router-dom";

function Carrito() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const { data: products = [], isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: () => productService.getAllProducts(),
  });

  if (isLoading) return <p>Cargando productos del carrito...</p>;
  if (error) return <p>Error al cargar los productos del carrito.</p>;

  // Filtrar productos que están en el carrito
  const cartProducts = products.filter(p => cartItems.some(ci => ci.id === p.id));

  // Agregar cantidad desde el carrito
  const cartProductsWithQty = cartProducts.map(p => {
    const ci = cartItems.find(item => item.id === p.id);
    return { ...p, quantity: ci?.quantity ?? 1 };
  });

  // Calcular total (usar price y cantidad)
  const totalPrice = cartProductsWithQty.reduce((total, p) => {
    return total + p.price * (p.quantity ?? 1);
  }, 0);

  return (
    <div className={styles.container}>
      <h1>🛒 Carrito de compras</h1>

      {cartProductsWithQty.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className={styles.cartList}>
            {cartProductsWithQty.map(product => (
              <li key={product.id} className={styles.cartItem}>
                <img src={product.image} alt={product.title} className={styles.cartImg} />
                <div className={styles.cartDetails}>
                  <h2>{product.title}</h2>
                  <p>Precio: ${product.price.toFixed(2)}</p>
                  <label>
                    Cantidad:
                    <input
                      type="number"
                      min={1}
                      value={product.quantity}
                      onChange={(e) => updateQuantity(product.id, parseInt(e.target.value || "1"))}
                    />
                  </label>
                  <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>

          <div className={styles.total}>
            <h3>Total: ${totalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h3>

            <Link
              to="/checkout"
              state={{
                cartProducts: cartProductsWithQty,
                totalPrice
              }}
            >
              <button className={styles.compra}>Finalizar Compra</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Carrito;