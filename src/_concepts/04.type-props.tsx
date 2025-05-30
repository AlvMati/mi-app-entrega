type PostCardProps = {
  title: string;
  description: string;
  src: string;
  like: number; // "me gusta" count
  precio: number; // price
};

function PostCard(props: PostCardProps) {
    return (
    <section>
        <img width={220} height={220} src={props.src}/>
        <h1>{props.title}</h1>
        <p>${props.precio}</p>
        <p>{props.description}</p>
        <p>Le gusta a {props.like} personas</p>
    </section>
  );
}

export default PostCard;