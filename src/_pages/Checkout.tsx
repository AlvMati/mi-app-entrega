import styles from "./checkout.module.css";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

interface Product {
  id: number;
  title: string;
  price: number;
  image?: string;
  quantity?: number;
}

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { clearCart } = useCart();

  // Seguridad: si location.state es undefined, usamos valores por defecto
  const state = (location.state as { cartProducts?: Product[]; totalPrice?: number }) || {};
  const cartProducts: Product[] = state.cartProducts || [];
  const totalPrice: number = state.totalPrice ?? 0;

  const [processing, setProcessing] = useState<boolean>(cartProducts.length > 0);
  const [orderId, setOrderId] = useState<string>("");

  useEffect(() => {
    if (cartProducts.length === 0) {
      setProcessing(false);
      return;
    }

    const timeout = setTimeout(() => {
      setProcessing(false);
      setOrderId("ORD-" + Math.floor(100000 + Math.random() * 900000));
      clearCart();  // vaciamos el carrito global al finalizar la compra
    }, 2000);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // se ejecuta solo al montar

  return (
    <div className={styles.container}>
      {processing ? (
        <div className={styles.processing}>
          <h2>Procesando tu compra...</h2>
          <p>Por favor, espera un momento ⏳</p>
        </div>
      ) : cartProducts.length === 0 ? (
        <div className={styles.empty}>
          <h2>No hay productos para procesar</h2>
          <p>Si viniste desde el carrito, probablemente no se envió el estado correctamente.</p>
          <button onClick={() => navigate(-1)}>Volver al carrito</button>
        </div>
      ) : (
        <div className={styles.summary}>
          <h2>✅ ¡Gracias por tu compra!</h2>
          <p>ID de orden: <strong>{orderId}</strong></p>

          <h3>Productos comprados:</h3>
          <ul className={styles.productList}>
            {cartProducts.map(p => (
              <li key={p.id}>
                {p.image && <img src={p.image} alt={p.title}  className={styles.img} />}
                <span>{p.title} - ${p.price.toFixed(2)} x {p.quantity ?? 1}</span>
              </li>
            ))}
          </ul>

          <p>Total pagado: <strong>${totalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong></p>

          <button className={styles.button} onClick={() => navigate("/")}>
            Volver al inicio
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;