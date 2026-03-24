import styles from './ServiceCard.module.css';


export default function ServiceCard({icon,title,description}){
    return (
        <article className={styles.card}>
            <span className={styles.icon}>{icon}</span>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.desc}>{description}</p>
        </article>
    )
}