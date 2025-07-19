import PostCard from '../_components/PostCard' 
import PostCardContainer from '../_components/PostCardContainer'
import { useState } from 'react';
import { Header , Busqueda } from '../_components/header';

type Post = {
  id: number;
  title: string;
  description: string;
  src: string;
  precio: number;
  precioAnterior?: number;
  descuento?: number;
  
}


type Response = {
  most_views:{
    categorytitle: string;
    categorydescription: string;
    posts: Post[];
  };
  most_views2:{
    categorytitle: string;
    categorydescription: string;
    posts: Post[];
  };
  most_views3:{
    categorytitle: string;
    categorydescription: string;
    posts: Post[];
  };
  most_views4:{
    categorytitle: string;
    categorydescription: string;
    posts: Post[];
  };
}


const response: Response = {
  most_views: {
    categorytitle: 'Recomendados para ti💥💢💥!',
    categorydescription: 'Estas son las mejores recomendaciones para vos!',
    posts: [
      {
        id: 1,
        src: './../public/currenReloj.webp',
        title: 'Reloj Hombre CURREN',
        precioAnterior: 79.993,
        precio: 69.993,
        descuento: 12,
        description: 'Relojes Hombre Deportivos CURREN...',
      },
      {
        id: 2,
        src: './../public/talagro.webp',
        title: 'Taladro Dewalt',
        precioAnterior: 399.999,
        precio: 389.514, 
        descuento: 3,
        description: 'Taladro Atornillados Inalambrico Dewalt...',
      },
      {
        id: 3,
        src: './../public/vasser.webp',
        title: 'Bomba de Agua Vasser 1.5HP',
        precioAnterior: 49.885,
        precio: 39.885,
        descuento: 20,
        description: 'Bomba de Agua Presurizada Vasser 1.5HP...',
      },
      {
        id: 4,
        src: './../public/Unnic.webp',
        title: 'Cafetera Unnic',
        precioAnterior: 429.999,
        precio: 409.999,
        descuento: 5,
        description: 'Cafetera Unnic Espresso Automática...',
      },
      {
        id: 5,
        src: './../public/NBX.webp',
        title: 'Monitor Gamer 27',
        precioAnterior: 249.999,
        precio: 219.099, 
        descuento: 12,
        description: 'Monitor Gamer 27 Nbx 180hz 1ms...',
      },
      {
        id: 6,
        src: './../public/NESCAFÉ.webp',
        title: 'Cafetera Dolce',
        precioAnterior: 249.999,
        precio: 219.099,
        descuento: 12,
        description: 'Cafetera Multibebida Dolce Gusto Piccolo XS...',
      },
      {
        id: 7,
        src: './../public/Smart.webp',
        title: 'Smart Tv 55"',
        precioAnterior: 399.999,
        precio: 344.599,
        descuento: 9,
        description: 'Smart Tv Un55du7000gczb Du7000 55" Crystal Negro...',
      },
    ],
  },
  
  most_views2: {
    categorytitle: 'Ofertas de la semana 🏷️',
    categorydescription: 'Estos son los posts menos vendidos de la semana!',
    posts: [
      {
        id: 8,
        src: './../public/topper.webp',
        title: 'Botines De Futsal',
        precioAnterior: 71.999,
        precio: 59.999,
        description: 'Botines De Futsal- Indoor Topper San Ciro',
      },
      {
        id: 9,
        src: './../public/wilson.webp',
        title: 'Mochila Wilson',
        precioAnterior: 85.555,
        precio: 62.999, 
        description: 'Mochila Wilson Porta Notebook Urbana...',
      },
      {
        id: 10,
        src: './../public/zapatillas.webp',
        title: 'Zapatillas de Fútbol',
        precioAnterior: 99.999,
        precio: 85.999,
        description: 'Zapatillas de Fútbol, botines, reforzados...',
      },
      {
        id: 11,
        src: './../public/motul.webp',
        title: 'Aceite Motul 20w-50',
        precioAnterior: 19.999,
        precio: 15.555, 
        description: 'Aceite Para Motor Motul 20w-50 Para moto',
      },
      {
        id: 12,
        src: './../public/208.webp',
        title: 'Peugeot 208',
        precioAnterior: 9999999,
        precio: 999.999,
        description: 'Peugeot 208 1.6 Allure Pack',
      },
      {
        id: 13,
        src: './../public/ns200.webp',
        title: 'Bajaj Rouser 200 Ns Kit Transmision',
        precioAnterior: 119.999,
        precio: 107.053, 
        description: 'Bajaj Rouser 200 Ns Kit Transmision...',
      },
      {
        id: 14,
        src: './../public/polera.webp',
        title: 'Polera Hombre',
        precioAnterior: 99.999,
        precio: 89.999,
        description: 'Polera Hombre Brooksfield Cuello Alto Tejido Liso 4081b',
      },
    ],
  },
  
  most_views3: {
    categorytitle: 'Ofertas RELAMPAGO 🚀',
    categorydescription: 'Estos son los posts menos vendidos de la semana!',
    posts: [
      {
        id: 15,
        src: './../public/philco.webp',
        title: 'Lavarropas Philco',
        precioAnterior: 899.999,
        precio: 749.999, 
        description: 'Lavarropas Inverter Philco Carga Frontal 11Kg...',
      },
      {
        id: 16,
        src: './../public/silla.webp',
        title: 'Silla Gamer',
        precioAnterior: 199.999,
        precio: 179.999, 
        description: 'Silla Gamer Ergonómica Reclinable Premium Para Pc...',
      },
      {
        id: 17,
        src: './../public/foos.webp',
        title: 'Zapatillas John Foos',
        precioAnterior: 59.999,
        precio: 48.931,
        description: 'Zapatillas John Foos Urbanas Unisex...',
      },
      {
        id: 18,
        src: './../public/proyector.webp',
        title: 'Proyector Mini Chowa',
        precioAnterior: 199.999,
        precio: 155.999, 
        description: 'Proyector Mini Chowa P8 Android WiFi 4K hD 720P...',
      },
      {
        id: 19,
        src: './../public/mochila.webp',
        title: 'Mochilla Musette',
        precioAnterior: 29.999,
        precio: 18.999,
        description: 'Mochilla Musette De Cuero Sintético...',
      },
      {
        id: 20,
        src: './../public/sobretodo.webp',
        title: 'Sobretodo Abrigo',
        precioAnterior: 59.999,
        precio: 44.599, 
        description: 'Sobretodo Simón De La Costa Abrigo...',
      },
      {
        id: 21,
        src: './../public/licu.webp',
        title: 'Licuadora/ icadoara',
        precioAnterior: 99.999,
        precio: 89.999,
        description: 'Picadora 123 + licuadora 1 litro Moulinex color blanco',
      },
    ],
  },
  
  most_views4: {
    categorytitle: 'ENVIO GRATIS 🚚',
    categorydescription: 'Estos son los posts menos vendidos de la semana!',
    posts: [
      {
        id: 22,
        src: './../public/heladera.webp',
        title: 'Heladera Philco No Frost 428l Negra',
        precioAnterior: 9999999,
        precio: 999.399, 
        description: 'Heladera Side By Side Philco No Frost 428l Negra',
      },
      {
        id: 23,
        src: './../public/cocina.webp',
        title: 'Cocina Electrolux',
        precioAnterior: 399.999,
        precio: 359.999, 
        description: 'Cocina Electrolux 4 Hornallas Con Horno...',
      },
      {
        id: 24,
        src: './../public/anafe.webp',
        title: 'Anafe electrico',
        precioAnterior: 99.999,
        precio: 79.999,
        description: 'Anafe electrico cocina spica sp-1040 doble hornalla...',
      },
      {
        id: 25,
        src: './../public/cocina2.webp',
        title: 'Cocina Florencia',
        precioAnterior: 399.999,
        precio: 350.000, 
        description: 'Cocina Florencia De 4 Hornallas 56cm...',
      },
      {
        id: 26,
        src: './../public/drean.webp',
        title: 'Lavarropas Drean',
        precioAnterior: 799.999,
        precio: 642.257,
        description: 'Lavarropas Carga Frontal 6 Kg Blanco Drean Lfdr0606lb0',
      },
      {
        id: 27,
        src: './../public/WHIRLPOOL.webp',
        title: 'Lavarropas Whirlpool',
        precioAnterior: 999.999,
        precio: 883.666, 
        description: 'Lavarropas Whirlpool Carga Frontal 7 Kg 1200rpm Inverter Wnq70as Gris',
      },
      {
        id: 28,
        src: './../public/s24.webp',
        title: 'Samsung Galaxy S24',
        precioAnterior: 399.999,
        precio: 999.999,
        description: 'Samsung Galaxy S24 Fe 256gb 8gb 5g Blue',
      },
    ],
  },
}



function Posts() {
  
  const {most_views, most_views2, most_views3, most_views4} = response;
  const [cartItems, setCartItems] = useState<number[]>([]);
  const [searchTerm, serSearchTerm] = useState('');
  
  const filteredMostViews = (most_views.posts.filter(post => 
  post.title.toLowerCase().includes(searchTerm.toLowerCase())));
  
  const filteredMostViews2 = (most_views2.posts.filter(post => 
  post.title.toLowerCase().includes(searchTerm.toLowerCase())));
  
  const filteredMostViews3 = (most_views3.posts.filter(post => 
  post.title.toLowerCase().includes(searchTerm.toLowerCase())));
  
  const filteredMostViews4 = (most_views4.posts.filter(post => 
  post.title.toLowerCase().includes(searchTerm.toLowerCase())));


  function handleToggleCartItem(id: number) {
    // Si el id ya está en el carrito, lo eliminamos
    if (cartItems.includes(id)) {
      setCartItems(cartItems.filter(itemId => itemId !== id));
    } else {
      setCartItems([...cartItems, id]);
    }
  }

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>){
    serSearchTerm(e.target.value);
  }

  return (
    <div>
      <Busqueda 
      searchTerm={searchTerm} 
      onSearchChange={handleSearchChange}
      />
      <Header 
      cartCount={cartItems.length}
      /> 
      
      {filteredMostViews.length > 0 && (
      <PostCardContainer 
        title= {most_views.categorytitle}>
          {filteredMostViews.map((post) =>  { 
          return (
              <PostCard
                id={post.id}
                title={post.title} 
                precioAnterior={post.precioAnterior}
                precio={post.precio}
                descuento={post.descuento}
                comprar={post.precio > 0}
                src={post.src} 
                isInCart={cartItems.includes(post.id)}
                onToggleCart={() => handleToggleCartItem(post.id)}
              />
          )})} 
          
      </PostCardContainer>
      )}
      
      {filteredMostViews2.length > 0 && (
      <PostCardContainer 
        title= {most_views2.categorytitle}>
          {filteredMostViews2.map((post) =>  { 
          return (
            <PostCard
              id={post.id}
              title={post.title} 
              precioAnterior={post.precioAnterior}
              precio={post.precio} 
              comprar={post.precio > 0} 
              src={post.src} 
              isInCart={cartItems.includes(post.id)}
              onToggleCart={() => handleToggleCartItem(post.id)}
            />
          )})} 
          
      </PostCardContainer>
      )}
      
      {filteredMostViews3.length > 0 && (
      <PostCardContainer 
        title= {most_views3.categorytitle}>
          {filteredMostViews3.map((post) =>  { 
          return (
            <PostCard
              id={post.id}
              title={post.title} 
              precioAnterior={post.precioAnterior}
              precio={post.precio}
              comprar={post.precio > 0} 
              src={post.src} 
              isInCart={cartItems.includes(post.id)}
              onToggleCart={() => handleToggleCartItem(post.id)}
            />
          )})} 
          
      </PostCardContainer>
      )}
      
      {filteredMostViews4.length > 0 && (
      <PostCardContainer 
        title= {most_views4.categorytitle}>
          {filteredMostViews4.map((post) =>  { 
          return (
            <PostCard
              id={post.id}
              title={post.title} 
              precioAnterior={post.precioAnterior}
              precio={post.precio} 
              comprar={post.precio > 0} 
              src={post.src} 
              isInCart={cartItems.includes(post.id)}
              onToggleCart={() => handleToggleCartItem(post.id)}
            />
          )})} 
          
      </PostCardContainer>
      )}

    </div>
  )
}
export default Posts

export const allProducts = [
  ...response.most_views.posts,
  ...response.most_views2.posts,
  ...response.most_views3.posts,
  ...response.most_views4.posts,
];