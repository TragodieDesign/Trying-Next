import Link from "next/link"
import styles from '../../styles/Home.module.css'

const Header =() =>(
 <div className={styles.header}>
  <Link href="/">
    <a className={styles.link}>Home</a>
  </Link>
  <Link href="/blog/">
    <a className={styles.link}>About </a>
  </Link>
  
  </div>

);
export default Header

