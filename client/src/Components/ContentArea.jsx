import '../Styles/ContentArea.css'
import {Routes, Route} from 'react-router-dom'
import Home from '../Routes/Home'
import Login from '../Routes/Login'
import Races from '../Routes/Races'
import Logout from '../Routes/Logout'
import AdminDashboard from '../Routes/AdminDashboard'
import CreateCompetition from '../Routes/CreateCompetition'
import CreateRace from '../Routes/CreateRace'


const ContentArea = ({retrievedCompetitions, loginState, changeLoginState}) => {


  return(
    <section className="content-area">
      <Routes>
        <Route path='/' element={<Home loginState={loginState} retrievedCompetitions={retrievedCompetitions}/>} />
        <Route path="/home" element={<Home loginState={loginState} retrievedCompetitions={retrievedCompetitions}/>} />
        <Route path='/login' element={<Login loginState={loginState} changeLoginState={changeLoginState}/>}/>
        <Route path='/logout' element={<Logout changeLoginState={changeLoginState}/>}/>
        <Route path='/dashboard' element={<AdminDashboard/>}/>
        <Route path='/create-competition' element={<CreateCompetition/>}/>
        <Route path='/create-race' element={<CreateRace retrievedCompetitions={retrievedCompetitions}/>}/>
        <Route path='/races/:competition_tag' element={<Races loginState={loginState} retrievedCompetitions={retrievedCompetitions}/>}/>
      </Routes>
    </section>
  )
}

export default ContentArea