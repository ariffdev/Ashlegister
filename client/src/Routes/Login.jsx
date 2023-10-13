import '../Styles/Login.css'
import axios from 'axios';
import AdminDashboard from './AdminDashboard';

const API_URL = "https://ashlegister.onrender.com"


const Login = ({loginState, changeLoginState}) => {

  const handleForm = (event) => {
    event.preventDefault();
  }

  const handleLogin = () => {
    const emailAddress = document.getElementById('email-address').value
    const password = document.getElementById('password').value
    logAdminIn(emailAddress, password)

    // Resetting the input values
    document.getElementById('email-address').value = ''
    document.getElementById('password').value = ''

  }



  const logAdminIn = (emailAddress, password) => {
    const user = 
    {
      'email': emailAddress, 
      'password': password
    }
    
    axios
      .post(API_URL + '/login', user)
      .then(response => {
        if(response.status === 200){
            changeLoginState(true)
        }else{
          changeLoginState(false)
          alert("Invalid Credentials. Try Again")
        }
      })
      .catch(() => {
        changeLoginState(false)
        alert("Invalid Credentials")
      })
  } 



    if(loginState == false){
      return(
      <main className="login-page">
          <div className="main-section">
            <div className='text-section'>
              <p className='site-name'>ASHLEGISTER</p>
              <p className='login-title'>ADMIN LOGIN</p>
            </div>
            
            <form onClick={handleForm}>
              <label htmlFor="email-address">Email Address</label>
              <input type="text" name='email-address' id='email-address' />

              <label htmlFor="password">Password</label>
              <input type="password" name='password' id='password' />

              <button onClick={handleLogin} id='login-btn' type='button'>LOGIN</button>
            </form>

          </div>
        </main>
      )
    } else if(loginState == true){
      return(
        <AdminDashboard/>
      )
    }
}

export default Login