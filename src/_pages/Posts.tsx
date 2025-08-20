import { products } from '../data/Products.ts';
import PostCard from '../_components/PostCard';
import PostCardContainer from '../_components/PostCardContainer';
import { useState } from 'react';
import { Header, Busqueda } from '../_components/header';
import { useQuery } from '@tanstack/react-query';
import { productService } from '../services/productService';

function Posts() {
  const { data: products = [], isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: () => productService.getAllProducts(),
  });

  const [cartItems, setCartItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  if (isLoading) return <p>Cargando productos...</p>;
  if (error) return <p>Error al cargar productos</p>;

  // Agrupamos los productos según los grupos de ids que tenías
  const most_views = {
    categorytitle: 'Recomendados para ti💥💢💥!',
    posts: products.filter((p) => [1, 2, 3, 4, 5, 6, 7].includes(p.id)),
  };

  const most_views2 = {
    categorytitle: 'Lo más vendido🔥🔥🔥',
    posts: products.filter((p) => [8, 9, 10, 11, 12, 13, 14].includes(p.id)),
  };

  const most_views3 = {
    categorytitle: 'Lo más buscado🔎',
    posts: products.filter((p) => [15, 16, 17, 18, 19, 20, 21].includes(p.id)),
  };

  const most_views4 = {
    categorytitle: 'Lo más nuevo🆕',
    posts: products.filter((p) => [22, 23, 24, 25, 26, 27, 28].includes(p.id)),
  };

  // Filtramos por búsqueda
  const filteredMostViews = most_views.posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredMostViews2 = most_views2.posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredMostViews3 = most_views3.posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredMostViews4 = most_views4.posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Manejo de carrito
  function handleToggleCartItem(productId: number) {
    if (cartItems.includes(productId)) {
      setCartItems(cartItems.filter((id) => id !== productId));
    } else {
      setCartItems([...cartItems, productId]);
    }
  }

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  return (
    <div>
      <Busqueda searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <Header />

      {filteredMostViews.length > 0 && (
        <PostCardContainer title={most_views.categorytitle}>
          {filteredMostViews.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              precio={post.price}
              precioAnterior={post.originalPrice}
              descuento={post.discount}
              color={post.colors ? post.colors[0] : 'Sin color'}
              src={post.image}
              isInCart={cartItems.includes(post.id)}
              onToggleCart={() => handleToggleCartItem(post.id)}
            />
          ))}
        </PostCardContainer>
      )}

      {filteredMostViews2.length > 0 && (
        <PostCardContainer title={most_views2.categorytitle}>
          {filteredMostViews2.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              precio={post.price}
              precioAnterior={post.originalPrice}
              descuento={post.discount}
              color={post.colors ? post.colors[0] : 'Sin color'}
              src={post.image}
              isInCart={cartItems.includes(post.id)}
              onToggleCart={() => handleToggleCartItem(post.id)}
            />
          ))}
        </PostCardContainer>
      )}

      {filteredMostViews3.length > 0 && (
        <PostCardContainer title={most_views3.categorytitle}>
          {filteredMostViews3.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              precio={post.price}
              precioAnterior={post.originalPrice}
              descuento={post.discount}
              color={post.colors ? post.colors[0] : 'Sin color'}
              src={post.image}
              isInCart={cartItems.includes(post.id)}
              onToggleCart={() => handleToggleCartItem(post.id)}
            />
          ))}
        </PostCardContainer>
      )}

      {filteredMostViews4.length > 0 && (
        <PostCardContainer title={most_views4.categorytitle}>
          {filteredMostViews4.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              precio={post.price}
              precioAnterior={post.originalPrice}
              descuento={post.discount}
              color={post.colors ? post.colors[0] : 'Sin color'}
              src={post.image}
              isInCart={cartItems.includes(post.id)}
              onToggleCart={() => handleToggleCartItem(post.id)}
            />
          ))}
        </PostCardContainer>
      )}
    </div>
  );
}

export default Posts;

export const allProducts = [...products]