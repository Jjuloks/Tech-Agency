import styles from './ServiceCard.module.css';
import Image from '../../assets/web.jpeg'

export default function ServiceCard({icon,title,description, imageServiceUrl, startingPrice}){
    return (
        <article className={styles.card}>
            <img src={imageServiceUrl} className={styles.imageService} />
            <h3 className={styles.title}> {icon}{title}</h3>
            <p className={styles.desc}>{description}</p>
            <p className={styles.startingPrice}> Cena juz od {startingPrice} zł</p>
             <a href="/home" className={styles.btn}>Zobacz ofertę</a>
        </article>
    )
}