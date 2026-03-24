import styles from './Navbar.module.css';


export default function Navbar (){
    return (
        <nav className={styles.nav}>
            <span className={styles.logo}>TechAgency</span>
            <ul className={styles.links}>
                <li><a href="#services">Usługi</a></li>
                <li><a href="#team">Zespół</a></li>
                <li><a href="#posts">Aktualności</a></li>
                <li><a href="#contact">Kontakt</a></li>
            </ul>
        </nav>
    )
}