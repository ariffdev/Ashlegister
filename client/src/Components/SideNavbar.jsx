import '../Styles/SideNavbar.css'
import { Link } from 'react-router-dom'


const SideNavbar = ({loginState}) => {
  let logAction
  if(loginState == false){
    logAction = [<Link key={0} className='nav-item login-btn' to="/login"> Login as Admin </Link>]
  }else if(loginState == true){
    logAction = [<Link key={0} className='nav-item login-btn' to="/logout"> Logout </Link>,
                <Link key={1} className='nav-item dashboard-btn' to="/dashboard">Dashboard </Link>]
  }

  return(
    <section className="side-nav-bar">
      <Link className='nav-item' to="/home">Home</Link>

      {logAction.map(item => {
        return(
          item
        )
      })}

    </section>
  )
}

export default SideNavbar