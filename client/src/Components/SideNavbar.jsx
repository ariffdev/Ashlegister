import '../Styles/SideNavbar.css'
import { Link } from 'react-router-dom'


const SideNavbar = () => {

  return(
    <section className="side-nav-bar">
      <Link className='nav-item' to="/home">Home</Link>

      <Link className='nav-item' to="/registration"> Registration </Link>

      <Link className='nav-item login-btn' to="/login"> Login as Admin </Link>

    </section>
  )
}

export default SideNavbar