import { NavLink } from 'react-router-dom'
import Icon from '../../assets/images/icon.png'
import './header.css'

export function Header() {
  return (
    <header>
      <img src={Icon} onClick={() => window.location.href = '/'} />
      <nav>
        <NavLink to="/about">Sobre</NavLink>
        <NavLink to="/projects">Projetos</NavLink>
        <NavLink to="/setup">Setup</NavLink>
        <NavLink to="/links">Links</NavLink>
      </nav>
      <img src={Icon} className="invisible" />
    </header>
  )
}