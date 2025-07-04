// import { Children } from "react"; React.ReactNode
import { type ReactNode } from "react";
import styles from './PostCardContainer.module.css';

type PostCardContainerProps = {
  title: string;
  description: string;
  children: ReactNode; // Children is a special prop that allows you to pass components as children
}

function PostCardContainer(props: PostCardContainerProps) {
    const { title, description, children } = props;
  return (
    <section className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.postCardContainer}>
          {children}
        </div>
    </section>
  );
}


export default PostCardContainer;

// Cambio minimo