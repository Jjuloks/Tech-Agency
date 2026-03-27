import styles from "./NewsCard.module.css";

export default function NewsCard({ title, content,imageUrl, slug }) {
  return (
    <div className={styles.div}>
      <article className={styles.card}>
       <img src={imageUrl} alt={title} className={styles.image} />

        <h3 className={styles.title}>{title}</h3>

        <p className={styles.excerpt}>
          {typeof content === "string" ? content.slice(0, 120) : "Kliknij aby przeczytać"}
        </p>

        <a href={`/news/${slug}`} className={styles.button}>
          Czytaj więcej
        </a>
      </article>
    </div>
  );
}