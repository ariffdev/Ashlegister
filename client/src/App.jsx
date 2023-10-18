import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Sidebar from "./Components/SideBar"
import SideNavbar from "./Components/SideNavbar"
import ContentArea from "./Components/ContentArea"

import { useState, useEffect } from "react"
import axios from 'axios'

import fetching_icon from './assets/loading_trans.gif'

const API_URL = "https://ashlegister.onrender.com";

const App = () => {

  const [retrievedCompetitions, setRetrievedCompetitions] = useState([])
  const [loginState, setLoginState] = useState(false)
  const [isFetchingData, setFetchingData] = useState(false)

  const getData = () =>{
    axios
        .get(API_URL + '/competitions')
        .then((response) => {
            setRetrievedCompetitions(response.data)
        })
  }


  let app_view;


  const changeLoginState = (new_state) => {
    setLoginState(new_state)
  }

  useEffect(() =>{
    setFetchingData(true)
    axios
        .get(API_URL + '/competitions')
        .then((response) => {
            setRetrievedCompetitions(response.data)
            setFetchingData(false)
        })

  }, [])

  if(isFetchingData == true){
    app_view =
      <div className="content-area">
        <h1 className="fetching">Fetching data...</h1>
        <img className="fetching_icon" src={fetching_icon} alt="" />
      </div>
  }else{
    app_view =
      <ContentArea getData={getData} retrievedCompetitions={retrievedCompetitions} changeLoginState={changeLoginState} loginState={loginState}/>
  }
  

  return (
    <div className="App">
      <Header API_URL={API_URL}/>
      <main>
        <SideNavbar loginState={loginState}/>
        {/* Start router here */}
          {app_view}
        {/* End router here */}
        <Sidebar/>
      </main>
      <Footer/>
    </div>
  )
}

export default App

