import styles from './TeamCard.module.css';


export default function TeamCard({name, role, bio, photoUrl}){
    return (
        <div className={styles.div}> 
        <article className={styles.card}>
            <img src={photoUrl} alt={name} className={styles.photo} />
            <h3 className={styles.name}>{name}</h3>
            <span className={styles.role}>{role}</span>
            <p className={styles.bio}>{bio}</p>
        </article>
        </div>
    )
}