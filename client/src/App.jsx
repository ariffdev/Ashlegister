import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Sidebar from "./Components/SideBar"
import SideNavbar from "./Components/SideNavbar"
import ContentArea from "./Components/ContentArea"

import { useState, useEffect } from "react"
import axios from 'axios'


const API_URL = 'http://127.0.0.1:8000';

const App = () => {

  const [retrievedCompetitions, setRetrievedCompetitions] = useState([])
  const [loginState, setLoginState] = useState(false)

  const changeLoginState = (new_state) => {
    setLoginState(new_state)
  }

  useEffect(() =>{
    axios
        .get(API_URL + '/competitions')
        .then((response) => {
            setRetrievedCompetitions(response.data)
        })

  }, [])


  return (
    <div className="App">
      <Header/>
      <main>
        <SideNavbar loginState={loginState}/>
        {/* Start router here */}
          <ContentArea retrievedCompetitions={retrievedCompetitions} changeLoginState={changeLoginState} loginState={loginState}/>
        {/* End router here */}
        <Sidebar/>
      </main>
      <Footer/>
    </div>
  )
}

export default App

