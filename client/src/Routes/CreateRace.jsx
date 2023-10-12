import '../Styles/CreateRace.css'
import axios from 'axios'


import {TimePicker} from 'react-ios-time-picker'


import { useState } from 'react'

import 'react-datepicker/dist/react-datepicker.css'

const API_URL = "https://ashlegister.onrender.com";

const CreateRace = ({retrievedCompetitions}) => {
  const [raceTime, setRaceTime] = useState(null)
  const [pageView, setPageView] = useState('Form') //variable for controlling the display mode

  const handleForm = (event) => {
    event.preventDefault();
  }

  const handleCreateRace = () => {
    const competition_tag = document.getElementById('competition_tag').value;
    const distance = document.getElementById('distance_selector').value;
    const gender = document.getElementById('gender_selector').value;
    const stage = document.getElementById('stage_selector').value;
    const race_tag = gender + distance + stage;
    const title = gender + " " + distance + " " + stage;
    sendRaceToBackend(competition_tag, distance, gender, race_tag, title, stage)
  }  


    const sendRaceToBackend = (competition_tag, distance, gender, race_tag, title, stage) => {
    const race = 
    {
      'competition_tag': competition_tag, 
      'distance':distance,
      'gender':gender,
      'race_tag':race_tag,
      'title': title,
      'stage':stage,
      'time': raceTime.toString(),
      'Results':{
        'Results':{
            
        }
      }
    }
    
    axios
      .post(API_URL + `/competitions/${competition_tag}/races`, race)
      .then(response => {
        if(response.status === 200){
            setPageView('Success')
        }
      })
      .catch(() => {
        alert("Try Againner")
      })
  } 


    let competition_tags = Object.keys(retrievedCompetitions)

    let competition_details = []
    competition_tags.forEach((competition_tag) => {

      competition_details.push(
        {
        competition_tag: competition_tag,
        competition_name: retrievedCompetitions[competition_tag]['title'],
        competition_date: retrievedCompetitions[competition_tag]['date']
      }
      )

    })


  let race_form =     
  <div className="create-competition">
      <div className="main-section">
        <div className='text-section'>
          <p className='page-title'>CREATE RACE</p>
        </div>
        
        <form onClick={handleForm}>
          <p>Select Competition</p>
          <select name="" id="competition_tag">
            {
              competition_details.map((competition) => {
                return(
                  <option key={competition.competition_tag} value={competition.competition_tag}>{competition.competition_name}</option>
                )
              })
            }
          </select>

          <p>Select Distance</p>
          <select name="distance_selector" id="distance_selector">
            <option value="100m">100m</option>
            <option value="200m">200m</option>
            <option value="100mH">100mH</option>
            <option value="110mH">110mH</option>
            <option value="400m">400m</option>
            <option value="800m">800m</option>
            <option value="1500m">1500m</option>
          </select>

          <p>Gender Selector</p>
          <select name="gender_selector" id="gender_selector">
            <option selected value="Men's">Male</option>
            <option value="Women's">Female</option>
          </select>

          <p>Stage Selector</p>
          <select name="" id="stage_selector">
            <option selected value="Prelims">Preliminary Round</option>
            <option value="Heats">Heats</option>
            <option value="Quarter-Finals">Quarter-Finals</option>
            <option value="Semi-Finals">Semi-Finals</option>
            <option value="Finals">Finals</option>
          </select>

          <p>Race Time</p>
          <TimePicker className='time-picker' onChange={(time)=> setRaceTime(time)}/>

          <button onClick={handleCreateRace} id='create-btn' type='button'>CREATE RACE</button>
        </form>
        </div>
    </div>


  if(pageView === 'Form'){
    return(
      <div>
        {race_form}
      </div>
    )
  } else if(pageView ==='Success'){
    return(
      <div className='success'>
        RACE CREATED SUCCESSFULLY
      </div>
    )
  }

}

export default CreateRace

