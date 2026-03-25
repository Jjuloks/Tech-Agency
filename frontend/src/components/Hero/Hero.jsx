import styles from './Hero.module.css';
import { NavLink } from 'react-router-dom';
export default function Hero({title, subtitle, ctaLabel, ctaLabel1}){
    return (
        <section className={styles.hero} id="sekcja">
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
             <div className={styles.ctas}>
             <NavLink to="/services" className={styles.ctaLabel}>{ctaLabel}</NavLink>
               <NavLink to="/contact" className={styles.ctaLabel}> {ctaLabel1}</NavLink>
               </div>
                <div className={styles.imageWrapper}>

      </div>
        </section>
    )
}


