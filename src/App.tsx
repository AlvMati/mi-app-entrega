// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import PostCard from './_components/PostCard' 
import PostCardContainer from './_components/PostCardContainer'

type Post = {
  id: number;
  title: string;
  description: string;
  src: string;
  precio: number; // price, optional
  like?: number; // "me gusta" count
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
        title: 'Post 1',
        precio: 0, // precio del post
        description: 'Descripción del post 1',
        like: 10,
        src: 'https://png.pngtree.com/background/20250124/original/pngtree-beautiful-natural-scenery-picture-image_15750499.jpg'
      },
      {
        id: 2,
        title: 'Post 2',
        description: 'Descripción del post 2',
        precio: 4.599, 
        src: 'https://png.pngtree.com/background/20250124/original/pngtree-beautiful-natural-scenery-picture-image_15750499.jpg'
      },
      {
        id: 3,
        title: 'Post 3',
        description: 'Descripción del post 3',
        precio: 4.599,
        like: 50,
        src: 'https://png.pngtree.com/background/20250124/original/pngtree-beautiful-natural-scenery-picture-image_15750499.jpg'
      },
      {
        id: 4,
        title: 'Post 4',
        precio: 0, // precio del post
        description: 'Descripción del post 1',
        like: 10,
        src: 'https://png.pngtree.com/background/20250124/original/pngtree-beautiful-natural-scenery-picture-image_15750499.jpg'
      },
      {
        id: 5,
        title: 'Post 5',
        description: 'Descripción del post 2',
        precio: 4.599, 
        src: 'https://png.pngtree.com/background/20250124/original/pngtree-beautiful-natural-scenery-picture-image_15750499.jpg'
      },
      {
        id: 6,
        title: 'Post 6',
        description: 'Descripción del post 3',
        precio: 4.599,
        like: 50,
        src: 'https://png.pngtree.com/background/20250124/original/pngtree-beautiful-natural-scenery-picture-image_15750499.jpg'
      },
      {
        id: 7,
        title: 'Post 7',
        description: 'Descripción del post 3',
        precio: 4.599,
        like: 50,
        src: 'https://png.pngtree.com/background/20250124/original/pngtree-beautiful-natural-scenery-picture-image_15750499.jpg'
      },
    ],
  },
  
  most_views2: {
    categorytitle: 'Ofertas de la semana 🏷️',
    categorydescription: 'Estos son los posts menos vendidos de la semana!',
    posts: [
      {
        id: 8,
        title: 'Post 8',
        precio: 0, // precio del post
        description: 'Descripción del post 1',
        like: 10,
        src: 'https://png.pngtree.com/background/20250124/original/pngtree-beautiful-natural-scenery-picture-image_15750499.jpg'
      },
      {
        id: 9,
        title: 'Post 9',
        description: 'Descripción del post 2',
        precio: 4.599, 
        src: 'https://png.pngtree.com/background/20250124/original/pngtree-beautiful-natural-scenery-picture-image_15750499.jpg'
      },
      {
        id: 10,
        title: 'Post 10',
        description: 'Descripción del post 3',
        precio: 4.599,
        like: 50,
        src: 'https://png.pngtree.com/background/20250124/original/pngtree-beautiful-natural-scenery-picture-image_15750499.jpg'
      },
      {
        id: 11,
        title: 'Post 11',
        description: 'Descripción del post 2',
        precio: 4.599, 
        src: 'https://png.pngtree.com/background/20250124/original/pngtree-beautiful-natural-scenery-picture-image_15750499.jpg'
      },
      {
        id: 12,
        title: 'Post 12',
        description: 'Descripción del post 3',
        precio: 4.599,
        like: 50,
        src: 'https://png.pngtree.com/background/20250124/original/pngtree-beautiful-natural-scenery-picture-image_15750499.jpg'
      },
      {
        id: 13,
        title: 'Post 13',
        description: 'Descripción del post 2',
        precio: 4.599, 
        src: 'https://png.pngtree.com/background/20250124/original/pngtree-beautiful-natural-scenery-picture-image_15750499.jpg'
      },
      {
        id: 14,
        title: 'Post 14',
        description: 'Descripción del post 3',
        precio: 4.599,
        like: 50,
        src: 'https://png.pngtree.com/background/20250124/original/pngtree-beautiful-natural-scenery-picture-image_15750499.jpg'
      },
    ],
  },
  
  most_views3: {
    categorytitle: 'ENVIO RELAMPAGO 🚀',
    categorydescription: 'Estos son los posts menos vendidos de la semana!',
    posts: [
      {
        id: 15,
        title: 'Post 15',
        precio: 0, // precio del post
        description: 'Descripción del post 1',
        like: 10,
        src: 'https://png.pngtree.com/background/20250124/original/pngtree-beautiful-natural-scenery-picture-image_15750499.jpg'
      },
      {
        id: 16,
        title: 'Post 16',
        description: 'Descripción del post 2',
        precio: 4.599, 
        src: 'https://png.pngtree.com/background/20250124/original/pngtree-beautiful-natural-scenery-picture-image_15750499.jpg'
      },
      {
        id: 17,
        title: 'Post 17',
        description: 'Descripción del post 3',
        precio: 4.599,
        like: 50,
        src: 'https://png.pngtree.com/background/20250124/original/pngtree-beautiful-natural-scenery-picture-image_15750499.jpg'
      },
      {
        id: 18,
        title: 'Post 18',
        description: 'Descripción del post 2',
        precio: 4.599, 
        src: 'https://png.pngtree.com/background/20250124/original/pngtree-beautiful-natural-scenery-picture-image_15750499.jpg'
      },
      {
        id: 19,
        title: 'Post 19',
        description: 'Descripción del post 3',
        precio: 4.599,
        like: 50,
        src: 'https://png.pngtree.com/background/20250124/original/pngtree-beautiful-natural-scenery-picture-image_15750499.jpg'
      },
      {
        id: 20,
        title: 'Post 20',
        description: 'Descripción del post 2',
        precio: 4.599, 
        src: 'https://png.pngtree.com/background/20250124/original/pngtree-beautiful-natural-scenery-picture-image_15750499.jpg'
      },
      {
        id: 21,
        title: 'Post 21',
        description: 'Descripción del post 3',
        precio: 4.599,
        like: 50,
        src: 'https://png.pngtree.com/background/20250124/original/pngtree-beautiful-natural-scenery-picture-image_15750499.jpg'
      },
    ],
  },
  
  most_views4: {
    categorytitle: 'ENVIO GRATIS 🚚',
    categorydescription: 'Estos son los posts menos vendidos de la semana!',
    posts: [
      {
        id: 22,
        title: 'Post 22',
        precio: 0, // precio del post
        description: 'Descripción del post 1',
        like: 10,
        src: 'https://png.pngtree.com/background/20250124/original/pngtree-beautiful-natural-scenery-picture-image_15750499.jpg'
      },
      {
        id: 23,
        title: 'Post 23',
        description: 'Descripción del post 2',
        precio: 4.599, 
        src: 'https://png.pngtree.com/background/20250124/original/pngtree-beautiful-natural-scenery-picture-image_15750499.jpg'
      },
      {
        id: 24,
        title: 'Post 24',
        description: 'Descripción del post 3',
        precio: 4.599,
        like: 50,
        src: 'https://png.pngtree.com/background/20250124/original/pngtree-beautiful-natural-scenery-picture-image_15750499.jpg'
      },
      {
        id: 25,
        title: 'Post 25',
        description: 'Descripción del post 2',
        precio: 4.599, 
        src: 'https://png.pngtree.com/background/20250124/original/pngtree-beautiful-natural-scenery-picture-image_15750499.jpg'
      },
      {
        id: 26,
        title: 'Post 26',
        description: 'Descripción del post 3',
        precio: 4.599,
        like: 50,
        src: 'https://png.pngtree.com/background/20250124/original/pngtree-beautiful-natural-scenery-picture-image_15750499.jpg'
      },
      {
        id: 27,
        title: 'Post 27',
        description: 'Descripción del post 2',
        precio: 4.599, 
        src: 'https://png.pngtree.com/background/20250124/original/pngtree-beautiful-natural-scenery-picture-image_15750499.jpg'
      },
      {
        id: 28,
        title: 'Post 28',
        description: 'Descripción del post 3',
        precio: 4.599,
        like: 50,
        src: 'https://png.pngtree.com/background/20250124/original/pngtree-beautiful-natural-scenery-picture-image_15750499.jpg'
      },
    ],
  },
}



function App() {
  const {most_views, most_views2, most_views3, most_views4} = response;
  return (
    <div>
      <PostCardContainer 
        title= {most_views.categorytitle}
        description= {most_views.categorydescription}>
          {/* .map recibe un array y devuelve un nuevo array [{},{},{}] => [1,2,3]*/}
          {most_views.posts.map((post) =>  { 
          return (
            <PostCard
              key={post.id}
              // key es una propiedad especial de React que ayuda a identificar los elementos de la lista
              title={post.title} 
              description={post.description}
              precio={post.precio} // precio del post 
              comprar={post.precio > 0} // si el precio es mayor a 0, se puede comprar
              src={post.src} 
              like={post.like} // opcional, puede no estar presente
            />
          )})} 
          
      </PostCardContainer>
      
      <PostCardContainer 
        title= {most_views2.categorytitle}
        description= {most_views2.categorydescription}>
          {most_views2.posts.map((post) =>  { 
          return (
            <PostCard
              key={post.id}
              title={post.title} 
              description={post.description}
              precio={post.precio} 
              comprar={post.precio > 0} 
              src={post.src} 
              like={post.like}
            />
          )})} 
          
      </PostCardContainer>
      
      <PostCardContainer 
        title= {most_views3.categorytitle}
        description= {most_views3.categorydescription}>
          {most_views3.posts.map((post) =>  { 
          return (
            <PostCard
              key={post.id}
              title={post.title} 
              description={post.description}
              precio={post.precio}
              comprar={post.precio > 0} 
              src={post.src} 
              like={post.like} 
            />
          )})} 
          
      </PostCardContainer>

      <PostCardContainer 
        title= {most_views4.categorytitle}
        description= {most_views4.categorydescription}>
          {most_views4.posts.map((post) =>  { 
          return (
            <PostCard
              key={post.id}
              title={post.title} 
              description={post.description}
              precio={post.precio} 
              comprar={post.precio > 0} 
              src={post.src} 
              like={post.like} 
            />
          )})} 
          
      </PostCardContainer>
    </div>
  )
}

export default App