import '../Styles/Login.css'
import axios from 'axios';

const API_URL = "http://localhost:8000"


const Logout = ({changeLoginState}) => {

    const logAdminOut = () => {
    axios
      .get(API_URL + '/logout')
      .then(response => {
        if(response.status === 200){
            changeLoginState(false)
        }
      })
  }


  logAdminOut()
  return(
    <h1 className='log-message'>Admin Logged Out</h1>
  )
}

export default Logout