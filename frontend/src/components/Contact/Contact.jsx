import styles from './Contact.module.css';
import ContactSection from '../ContactSection/ContactSection'

export default function Contact({title}){
    return (
        <div className={styles.div}> 
            <h3 className={styles.title}>{title}</h3>

        </div>
    )
}