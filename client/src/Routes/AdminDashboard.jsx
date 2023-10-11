import '../Styles/AdminDashboard.css'
import {Link} from 'react-router-dom'


const AdminDashboard = () => {

      const adminAction = [<Link key={0} className='dashboard-item' to="/create-competition"> Create Competitions</Link>,
                <Link key={1} className='dashboard-item' to="/create-race"> Create Races </Link>]

  return (
    <div className="dashboard">
      {adminAction}
    </div>
  )
}

export default AdminDashboard