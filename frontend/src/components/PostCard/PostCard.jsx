import styles from './PostCard.module.css';


export default function PostCard({title, excerpt, coverUrl}){
    return (
        <article className={styles.card}>
            <img src={coverUrl} alt={title} className={styles.cover} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.excerpt}>{excerpt}</p>
        </article>
    )
}