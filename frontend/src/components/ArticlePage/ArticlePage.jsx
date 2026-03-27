import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./ArticlePage.module.css";
 
function renderContent(content) {
  if (Array.isArray(content)) {
    return content.map((block, i) => {
      if (block.type === "paragraph") {
        return (
          <p key={i}>
            {block.children?.map((child) => child.text).join("")}
          </p>
        );
      }
      return null;
    });
  }
 
  if (typeof content === "string") {
    return <p>{content}</p>;
  }
 
  return null;
}
 
export default function ArticlePage() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
 
  useEffect(() => {
    fetch(
      `http://localhost:1337/api/articles?filters[slug][$eq]=${slug}&populate=*`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("ARTICLE API:", data);
        setArticle(data.data?.[0]);
      });
  }, [slug]);
 
  if (!article) return <p>Ładowanie...</p>;
 
  const data = article.attributes || article;
 

  const imageUrl =
    data.image?.url
      ? `http://localhost:1337${data.image.url}`
      : data.image?.data?.attributes?.url
      ? `http://localhost:1337${data.image.data.attributes.url}`
      : "";
 
  return (
    <div className={styles.container}>
      <article className={styles.article}>
        <h1>{data.title}</h1>
 
        {imageUrl && <img src={imageUrl} alt={data.title} className={styles.image} />}
        <div>{renderContent(data.content)}</div>
      </article>
    </div>
  );
}
 