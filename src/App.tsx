import PostCard from './_components/PostCard' 
import PostCardContainer from './_components/PostCardContainer'
import { useState } from 'react';
import { Header , Busqueda } from './_components/header';

type Post = {
  id: number;
  title: string;
  description: string;
  src: string;
  precio: number;
  like?: number;
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
        title: 'CURREN',
        precio: 69.993,
        description: 'Relojes Hombre Deportivos CURREN...',
        like: 1,
        src: './../public/currenReloj.webp'
      },
      {
        id: 2,
        title: 'DEWALT',
        description: 'Taladro Atornillados Inalambrico Dewalt...',
        precio: 389.514, 
        src: './../public/talagro.webp'
      },
      {
        id: 3,
        title: 'VASSER',
        description: 'Bomba de Agua Presurizada Vasser 1.5HP...',
        precio: 39.885,
        like: 50,
        src: './../public/vasser.webp'
      },
      {
        id: 4,
        title: 'Unnic',
        precio: 409.999,
        description: 'Cafetera Unnic Espresso Automática...',
        like: 10,
        src: './../public/Unnic.webp'
      },
      {
        id: 5,
        title: 'NBX',
        description: 'Monitor Gamer 27 Nbx 180hz 1ms...',
        precio: 219.099, 
        src: './../public/NBX.webp'
      },
      {
        id: 6,
        title: 'NESCAFÉ',
        description: 'Cafetera Multibebida Dolce Gusto Piccolo XS...',
        precio: 219.099,
        like: 50,
        src: './../public/NESCAFÉ.webp'
      },
      {
        id: 7,
        title: 'Samsung',
        description: 'Smart Tv Un55du7000gczb Du7000 55" Crystal Negro...',
        precio: 4.599,
        like: 50,
        src: './../public/Smart.webp'
      },
    ],
  },
  
  most_views2: {
    categorytitle: 'Ofertas de la semana 🏷️',
    categorydescription: 'Estos son los posts menos vendidos de la semana!',
    posts: [
      {
        id: 8,
        title: 'Botin Topper',
        precio: 59.999, // precio del post
        description: 'Botines De Futsal- Indoor Topper San Ciro',
        like: 10,
        src: './../public/topper.webp'
      },
      {
        id: 9,
        title: 'Mochila Wilson',
        description: 'Mochila Wilson Porta Notebook Urbana...',
        precio: 62.999, 
        src: './../public/wilson.webp'
      },
      {
        id: 10,
        title: 'Zapatilla Sport',
        description: 'Zapatillas de Fútbol, botines, reforzados...',
        precio: 85.999,
        like: 50,
        src: './../public/zapatillas.webp'
      },
      {
        id: 11,
        title: 'Motul',
        description: 'Aceite Para Motor Motul 20w-50 Para moto',
        precio: 15.550, 
        src: './../public/motul.webp'
      },
      {
        id: 12,
        title: '208',
        description: 'Peugeot 208 1.6 Allure Pack',
        precio: 22.000,
        like: 50,
        src: './../public/208.webp'
      },
      {
        id: 13,
        title: 'Kit Transmision',
        description: 'Bajaj Rouser 200 Ns Kit Transmision...',
        precio: 107.053, 
        src: './../public/ns200.webp'
      },
      {
        id: 14,
        title: 'Polera',
        description: 'Polera Hombre Brooksfield Cuello Alto Tejido Liso 4081b',
        precio: 89.999,
        like: 50,
        src: './../public/polera.webp'
      },
    ],
  },
  
  most_views3: {
    categorytitle: 'Ofertas RELAMPAGO 🚀',
    categorydescription: 'Estos son los posts menos vendidos de la semana!',
    posts: [
      {
        id: 15,
        title: 'PHILCO',
        precio: 749.999, // precio del post
        description: 'Lavarropas Inverter Philco Carga Frontal 11Kg...',
        like: 10,
        src: './../public/philco.webp'
      },
      {
        id: 16,
        title: 'Genérica',
        description: 'Silla Gamer Ergonómica Reclinable Premium Para Pc...',
        precio: 179.999, 
        src: './../public/silla.webp'
      },
      {
        id: 17,
        title: 'John Foos',
        description: 'Zapatillas John Foos Urbanas Unisex...',
        precio: 48.931,
        like: 50,
        src: './../public/foos.webp'
      },
      {
        id: 18,
        title: 'CHOWA',
        description: 'Proyector Mini Chowa P8 Android WiFi 4K hD 720P...',
        precio: 155.999, 
        src: './../public/proyector.webp'
      },
      {
        id: 19,
        title: 'MUSETTE',
        description: 'Mochilla Musette De Cuero Sintético...',
        precio: 18.999,
        like: 50,
        src: './../public/mochila.webp'
      },
      {
        id: 20,
        title: 'SIMÓN DE LA COSTA',
        description: 'Sobretodo Simón De La Costa Abrigo...',
        precio: 4.599, 
        src: './../public/sobretodo.webp'
      },
      {
        id: 21,
        title: 'Licuadora Moulinex',
        description: 'Picadora 123 + licuadora 1 litro Moulinex color blanco',
        precio: 4.599,
        like: 50,
        src: './../public/licu.webp'
      },
    ],
  },
  
  most_views4: {
    categorytitle: 'ENVIO GRATIS 🚚',
    categorydescription: 'Estos son los posts menos vendidos de la semana!',
    posts: [
      {
        id: 22,
        title: 'PHILCO',
        precio: 999.399, // precio del post
        description: 'Heladera Side By Side Philco No Frost 428l Negra',
        like: 10,
        src: './../public/heladera.webp'
      },
      {
        id: 23,
        title: 'Cocina Electrolux',
        description: 'Cocina Electrolux 4 Hornallas Con Horno...',
        precio: 4.599, 
        src: './../public/cocina.webp'
      },
      {
        id: 24,
        title: 'Anafe Electrico',
        description: 'Anafe electrico cocina spica sp-1040 doble hornalla...',
        precio: 79.999,
        like: 50,
        src: './../public/anafe.webp'
      },
      {
        id: 25,
        title: 'Cocina ',
        description: 'Cocina Florencia De 4 Hornallas 56cm...',
        precio: 350.000, 
        src: './../public/cocina2.webp'
      },
      {
        id: 26,
        title: 'DREAN',
        description: 'Lavarropas Carga Frontal 6 Kg Blanco Drean Lfdr0606lb0',
        precio: 642.257,
        like: 50,
        src: './../public/drean.webp'
      },
      {
        id: 27,
        title: 'WHIRLPOOL',
        description: 'Lavarropas Whirlpool Carga Frontal 7 Kg 1200rpm Inverter Wnq70as Gris',
        precio: 883.666, 
        src: './../public/WHIRLPOOL.webp'
      },
      {
        id: 28,
        title: 'S24',
        description: 'Samsung Galaxy S24 Fe 256gb 8gb 5g Blue',
        precio: 999.999,
        like: 50,
        src: './../public/s24.webp'
      },
    ],
  },
}



function App() {
  
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
        title= {most_views.categorytitle}
        description= {most_views.categorydescription}>
          {filteredMostViews.map((post) =>  { 
          return (
            <PostCard
              key={post.id}
              title={post.title} 
              description={post.description}
              precio={post.precio}
              comprar={post.precio > 0}
              src={post.src} 
              like={post.like}
              isInCart={cartItems.includes(post.id)}
              onToggleCart={() => handleToggleCartItem(post.id)}
            />
          )})} 
          
      </PostCardContainer>
      )}
      
      {filteredMostViews2.length > 0 && (
      <PostCardContainer 
        title= {most_views2.categorytitle}
        description= {most_views2.categorydescription}>
          {filteredMostViews2.map((post) =>  { 
          return (
            <PostCard
              key={post.id}
              title={post.title} 
              description={post.description}
              precio={post.precio} 
              comprar={post.precio > 0} 
              src={post.src} 
              like={post.like}
              isInCart={cartItems.includes(post.id)}
              onToggleCart={() => handleToggleCartItem(post.id)}
            />
          )})} 
          
      </PostCardContainer>
      )}
      
      {filteredMostViews3.length > 0 && (
      <PostCardContainer 
        title= {most_views3.categorytitle}
        description= {most_views3.categorydescription}>
          {filteredMostViews3.map((post) =>  { 
          return (
            <PostCard
              key={post.id}
              title={post.title} 
              description={post.description}
              precio={post.precio}
              comprar={post.precio > 0} 
              src={post.src} 
              like={post.like}
              isInCart={cartItems.includes(post.id)}
              onToggleCart={() => handleToggleCartItem(post.id)}
            />
          )})} 
          
      </PostCardContainer>
      )}
      
      {filteredMostViews4.length > 0 && (
      <PostCardContainer 
        title= {most_views4.categorytitle}
        description= {most_views4.categorydescription}>
          {filteredMostViews4.map((post) =>  { 
          return (
            <PostCard
              key={post.id}
              title={post.title} 
              description={post.description}
              precio={post.precio} 
              comprar={post.precio > 0} 
              src={post.src} 
              like={post.like}
              isInCart={cartItems.includes(post.id)}
              onToggleCart={() => handleToggleCartItem(post.id)}
            />
          )})} 
          
      </PostCardContainer>
      )}

    </div>
  )
}
export default App