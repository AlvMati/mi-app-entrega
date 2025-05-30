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
  }
}


const response: Response = {
  most_views: {
    categorytitle: 'Mejor precio de la semana 🔥',
    categorydescription: 'Estos son los posts con mejor precio de la semana, ¡no te los pierdas!',
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
        description: 'Descripción del post 4',
        precio: 10.599, 
        like: 10,
        src: 'https://png.pngtree.com/background/20250124/original/pngtree-beautiful-natural-scenery-picture-image_15750499.jpg'
      },
      {
        id: 5,
        title: 'Post 5',
        description: 'Descripción del post 5',
        precio: 14.599, 
        src: 'https://png.pngtree.com/background/20250124/original/pngtree-beautiful-natural-scenery-picture-image_15750499.jpg'
      },
      {
        id: 6,
        title: 'Post 6',
        description: 'Descripción del post 6',
        precio: 45.000, 
        like: 50,
        src: 'https://png.pngtree.com/background/20250124/original/pngtree-beautiful-natural-scenery-picture-image_15750499.jpg'
      },
      {
        id: 7,
        title: 'Post 7',
        description: 'Descripción del post 7',
        precio: 18.000, 
        like: 50,
        src: 'https://png.pngtree.com/background/20250124/original/pngtree-beautiful-natural-scenery-picture-image_15750499.jpg'
      },
    ],
  },
}



function App() {
  const {most_views} = response;
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
    </div>
  )
}

export default App