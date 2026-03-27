import { useStrapi } from "../../hooks/useStrapi";
import NewsCard from "../NewsCard/NewsCard";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import styles from "./NewsSection.module.css";

export default function NewsSection() {
  const { data, loading, error } = useStrapi('articles');

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>Aktualności</h2>
        <p>Najświeższe informacje i artykuły z naszego serwisu.</p>
      </div>

      <div className={styles.grid}>
        {data.map((data) => (
          <NewsCard
            key={data.id}
            title={data.title}
            content={data.content}
            slug={data.slug}
            imageUrl={`http://localhost:1337${data.image.url}`}
          />
        ))}
      </div>
    </section>
  );
}