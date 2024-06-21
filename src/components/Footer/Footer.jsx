import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>WebCommerce &copy; 2024</p>
      <p>Criado por <Link to="https://www.linkedin.com/in/matheus-balves/" target='_blank'>Matheus B. Alves </Link></p>
    </footer>
  )
}

export default Footer
