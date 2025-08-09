import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { productService } from '../services/productService';
import { useNavigate } from 'react-router-dom';
import styles from './NewProduct.module.css'; // si querés luego te paso un css básico

function NewProduct() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState<number | ''>('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newProduct: any) => productService.createProduct(newProduct),
    onSuccess: () => {
      // Actualiza cache para que la lista se refresque
      queryClient.invalidateQueries({ queryKey: ['products'] });
      // Redirigir a lista de productos
      navigate('/posts');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !price || !description || !category) {
      alert('Por favor completá todos los campos.');
      return;
    }

    mutation.mutate({
      title,
      price: Number(price),
      description,
      image,
      category,
    });
  };

  return (
    <div className={styles.container}>
      <h2>Crear nuevo producto</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Título:
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </label>

        <label>
          Precio:
          <input
            type="number"
            value={price}
            onChange={e => setPrice(e.target.value === '' ? '' : Number(e.target.value))}
          />
        </label>

        <label>
          Descripción:
          <textarea value={description} onChange={e => setDescription(e.target.value)} />
        </label>

        <label>
          URL de imagen:
          <input type="text" value={image} onChange={e => setImage(e.target.value)} />
        </label>

        <label>
          Categoría:
          <input type="text" value={category} onChange={e => setCategory(e.target.value)} />
        </label>

        <button type="submit" disabled={mutation.status === 'pending'}>
          {mutation.status === 'pending' ? 'Creando...' : 'Crear producto'}
        </button>

        {mutation.isError && <p style={{ color: 'red' }}>Error al crear el producto.</p>}
      </form>
    </div>
  );
}

export default NewProduct;