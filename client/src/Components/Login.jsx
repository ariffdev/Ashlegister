import '../Styles/Login.css'
import axios from 'axios';

const baseUrl = "http://localhost:3000/users"

const Login = () => {

  const handleForm = (event) => {
    event.preventDefault();
  }

  const handleLogin = () => {
    const emailAddress = document.getElementById('email-address').value
    const password = document.getElementById('password').value
    console.log(emailAddress)
    console.log(password)
    addUser(emailAddress, password)

    // Resetting the input values
    document.getElementById('email-address').value = ''
    document.getElementById('password').value = ''

  }

  const addUser = (emailAddress, password) => {
    const user = 
    {
      'email-address': emailAddress, password
    }
    
    axios
      .post(baseUrl, user)
      .then(response => {
        console.log(response)
      })
  }


  return(
    <main className="login-page">
      <div className='side-section'>
        <img className='ashesi-logo' src="../src/assets/ashesi-logo.png" alt="Ashesi Logo" />
      </div>

      <div className="main-section">
        <div className='text-section'>
          <p className='site-name'>ASHESI ATHLETICS</p>
          <p className='login-title'>LOGIN</p>
        </div>
        
        <form onClick={handleForm}>
          <label htmlFor="email-address">Email Address</label>
          <input type="text" name='email-address' id='email-address' />

          <label htmlFor="password">Password</label>
          <input type="password" name='password' id='password' />

          <button onClick={handleLogin} id='login-btn' type='button'>LOGIN</button>
          <button type='button'>SIGN UP</button>
        </form>

      </div>

      <div className="side-section"></div>
    </main>
  )
}

export default Login