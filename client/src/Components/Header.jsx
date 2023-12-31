import Icon from '@mdi/react'
import { mdiBrightness4 } from '@mdi/js'
import logo from '../assets/header-logo.png'
import '../Styles/Header.css'


const Header = ({API_URL}) => {
  return(
    <header>
      <a href="https://www.ashesi.edu.gh/" target='_blank' rel='noreferrer' className='header-logo-container'>
        <img className='header-logo' src={logo} />
      </a>
      <p className='app-title'>ASHLEGISTER</p>
      <Icon path={mdiBrightness4} size={1} color={'white'} id='theme-btn' className='theme-btn'/>
      <a href="https://github.com/ariffdev/Ashlegister/" target='_blank' rel='noreferrer'><p className="prototype">Prototype Repository</p></a>
      <a href={API_URL} target='_blank' rel='noreferrer'><p className="backend-docs">Backend Documentation</p></a>

    </header>
  )
}

export default Header