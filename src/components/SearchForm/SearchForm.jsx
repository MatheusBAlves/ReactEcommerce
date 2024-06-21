import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { IoMdSearch } from "react-icons/io";
import styles from './SearchForm.module.css'

const SearchForm = () => {

  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      navigate("/search?q=" + query);
      setQuery("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} id="searchForm">
      <input type="text" onChange={(e) => setQuery(e.target.value)} value={query} className={styles.inputs} />
      <button type="submit" className={styles.inputs} form="searchForm"><IoMdSearch /></button>
    </form>
  )
}

export default SearchForm
