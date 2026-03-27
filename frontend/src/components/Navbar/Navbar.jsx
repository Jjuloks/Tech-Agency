import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
 
export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>TechAgency</span>
 
      <ul className={styles.links}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
 
        <li>
          <NavLink to="/services">Usługi</NavLink>
        </li>
 
        <li>
          <NavLink to="/team">Zespół</NavLink>
        </li>
 
        <li>
          <NavLink to="/news">Aktualności</NavLink>
        </li>
 
        <li>
          <NavLink to="/contact">Kontakt</NavLink>
        </li>
      </ul>
    </nav>
  )
}