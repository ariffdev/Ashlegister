import '../Styles/AdminDashboard.css'
import {Link} from 'react-router-dom'


const AdminDashboard = () => {

      const adminAction = 
      [
      <Link key={0} className='dashboard-item' to="/create-competition"> Create Competitions</Link>,
      <Link key={1} className='dashboard-item' to="/create-race"> Create Races </Link>,
      <Link key={2} className='dashboard-item add-btns' to="/add-athletes"> Add Athletes to Existing Race </Link>,
      <Link key={3} className='dashboard-item add-btns' to="/add-results"> Add Results to Existing Race </Link>
      ]

  return (
    <div className="dashboard">
      {adminAction}
    </div>
  )
}

export default AdminDashboard