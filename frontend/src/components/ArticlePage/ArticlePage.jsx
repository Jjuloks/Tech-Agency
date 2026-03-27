import { useParams } from "react-router-dom";

export default function ArticlePage() {
  const { slug } = useParams();

  return (
    <div>
      <h1>Artykuł: {slug}</h1>
      <p>Tu będzie zawartość artykułu.</p>
    </div>
  );
}