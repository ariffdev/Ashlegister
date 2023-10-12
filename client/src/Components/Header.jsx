
import logo from '../assets/header-logo.png'
import '../Styles/Header.css'


const Header = () => {
  return(
    <header>
      <img className='header-logo' src={logo} />
      <p className='app-title'>ASHLEGISTER</p>
      <p className="prototype">Prototype</p>

    </header>
  )
}

export default Header