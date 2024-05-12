import styles from "./Navbar.module.css";

import { NavLink } from "react-router-dom"
import SearchForm from '../SearchForm/SearchForm.jsx'
import { IoMdPerson, IoMdCart } from "react-icons/io";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.links}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/add">Add Products</NavLink>
        </div>
        <div className={styles.perfil}>
          <SearchForm />
          <NavLink to="/account"><IoMdPerson /></NavLink>
          <NavLink to="/cart"><IoMdCart /></NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
