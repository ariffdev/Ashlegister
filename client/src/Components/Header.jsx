
import logo from '../assets/header-logo.png'
import '../Styles/Header.css'

const Header = () => {
  return(
    <header>
      <img className='header-logo' src={logo} />
      <p className='app-title'>ASHLEGISTER</p>
      <button className='login-state-btn'>
        Login as Admin
      </button>
    </header>
  )
}

export default Header