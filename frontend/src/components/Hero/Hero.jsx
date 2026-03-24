import styles from './Hero.module.css';


export default function Hero({title, subtitle, ctaLabel}){
    return (
        <section className={styles.hero} id="sekcja">
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
            <button className={styles.cta}>{ctaLabel}</button>
        </section>
    )
}