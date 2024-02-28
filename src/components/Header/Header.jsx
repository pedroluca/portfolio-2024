import Icon from '../../assets/images/icon.png'
import './header.css'

export function Header() {
  return (
    <header>
      <img src={Icon} />
      <nav>
        <p>ola</p>
        <p>ola</p>
      </nav>
      <img src={Icon} className="invisible" />
    </header>
  )
}