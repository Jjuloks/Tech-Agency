import { useStrapi } from "../../hooks/useStrapi";
import TeamCard from "../TeamCard/TeamCard";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import styles from './TeamSection.module.css';

export default function TeamSection() {
  const { data, loading, error } = useStrapi('team-members');

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section id="team" className={styles.section}>
      <h2>Nasze Zespół</h2>

      <div className={styles.grid}>
        {data.map(item => (
          <TeamCard
            key={item.id}
            name={item.name}
            role={item.role}
            bio={item.bio}
            photoUrl={item.photoUrl}
          />
        ))}
      </div>
    </section>
  );
}