import { type ReactNode } from "react";
import styles from './PostCardContainer.module.css';

type PostCardContainerProps = {
  title: string;
  children: ReactNode; 
}

function PostCardContainer(props: PostCardContainerProps) {
  const { title, children } = props;
  return (
    <section className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.postCardContainer}>
          {children}
        </div>
    </section>
  );
}
export default PostCardContainer;