import '../Styles/ContentArea.css'
import {Routes, Route} from 'react-router-dom'
import Home from '../Routes/Home'
import Registration from '../Routes/Registration'
import Login from '../Routes/Login'


const ContentArea = () => {


  return(
    <section className="content-area">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/registration" element={<Registration/>} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </section>
  )
}

export default ContentArea