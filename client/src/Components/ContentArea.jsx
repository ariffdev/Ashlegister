import '../Styles/ContentArea.css'
import {Routes, Route} from 'react-router-dom'
import Home from '../Routes/Home'
import Registration from '../Routes/Registration'
import Login from '../Routes/Login'
import Races from '../Routes/Races'


const ContentArea = ({retrievedCompetitions}) => {


  return(
    <section className="content-area">
      <Routes>
        <Route path='/' element={<Home retrievedCompetitions={retrievedCompetitions}/>} />
        <Route path="/home" element={<Home retrievedCompetitions={retrievedCompetitions}/>} />
        <Route path="/registration" element={<Registration/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/races/:competition_tag' element={<Races retrievedCompetitions={retrievedCompetitions}/>}/>
      </Routes>
    </section>
  )
}

export default ContentArea