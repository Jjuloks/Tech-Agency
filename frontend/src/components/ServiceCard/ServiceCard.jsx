import styles from './ServiceCard.module.css';
import Image from '../../assets/web.jpeg'

export default function ServiceCard({icon,title,description, imageServiceUrl}){
    return (
        <article className={styles.card}>
            <img src={imageServiceUrl} className={styles.imageService} />
            <h3 className={styles.title}> {icon}{title}</h3>
            <p className={styles.desc}>{description}</p>
        </article>
    )
}