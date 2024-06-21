import { Link, NavLink } from 'react-router-dom'
import styles from './Contact.module.css'
import { useState } from 'react'

const Contact = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert(`Olá ${name}, tudo bem? Esse formulário não está com sua funcionalidade implementada, caso queira entrar em contato, clique no texto "Quem somos nós" ao lado do formulário. Obrigado.`);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.logo}>Logo</div>
        <nav className={styles.links}>
          <Link to="https://www.linkedin.com/in/matheus-balves/" target='_blank'>Quem somos nós</Link>
          <NavLink to={"/"}>Política de Privacidade</NavLink>
          <NavLink to={"/"}>Programa de Fidelidade</NavLink>
          <NavLink to={"/"}>Nossas Lojas</NavLink>
          <NavLink to={"/"}>Quero ser franqueado</NavLink>
          <NavLink to={"/"}>Anuncie aqui</NavLink>
        </nav>
        <form onSubmit={handleSubmit} className={styles.contact} id='contactForm'>
          <h3>Fale Conosco</h3>
          <input type="text" name="name" placeholder='Nome' value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" name="mail" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <textarea name="message" placeholder='Escreva sua Mensagem' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          <button type="submit" form='contactForm'>Enviar Mensagem</button>
        </form>
      </section>
    </div>
  )
}

export default Contact
