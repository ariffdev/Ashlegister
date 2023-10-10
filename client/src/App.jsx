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
        <SideNavbar/>
        {/* Start router here */}
          <ContentArea retrievedCompetitions={retrievedCompetitions}/>
        {/* End router here */}
        <Sidebar/>
      </main>
      <Footer/>
    </div>
  )
}

export default App

