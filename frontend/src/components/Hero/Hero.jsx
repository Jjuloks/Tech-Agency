import styles from './Hero.module.css';
import { NavLink } from 'react-router-dom';
export default function Hero({title, subtitle, ctaLabel, ctaLabel1, heroImageUrl}){
    return (
        <div className={styles.caly}> 
        <section className={styles.hero}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
               <div className={styles.imageWrapper}>
   <img src={heroImageUrl} className={styles.heroImage} />
      </div>
             <div className={styles.ctas}>
             <NavLink to="/services" className={styles.ctaLabel}>{ctaLabel}</NavLink>
               <NavLink to="/contact" className={styles.ctaLabel1}> {ctaLabel1}</NavLink>
               </div>
        </section>
        </div>
    )
}


