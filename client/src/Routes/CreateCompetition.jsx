import '../Styles/CreateCompRace.css'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import { useState } from 'react'

import 'react-datepicker/dist/react-datepicker.css'

const API_URL = 'http://127.0.0.1:8000';

const CreateCompetition = () => {
  const [competitionDate, setCompetitionDate] = useState(new Date())
  const [pageView, setPageView] = useState('Form') //variable for controlling the display mode

  const handleForm = (event) => {
    event.preventDefault();
  }

  const handleCreateCompetition = () => {
    const competition_tag = document.getElementById('competition_tag').value
    const title = document.getElementById('competition_title').value
    sendCompetitionToBackend(competition_tag, title, competitionDate)

    // Resetting the input values
    document.getElementById('competition_tag').value = ''
    document.getElementById('competition_title').value = ''
  }  


    const sendCompetitionToBackend = (competition_tag, title, competitionDate) => {
    const competition = 
    {
      'competition_tag': competition_tag, 
      'title': title,
      'date': competitionDate
    }
    
    axios
      .post(API_URL + '/competitions', competition)
      .then(response => {
        if(response.status === 200){
            console.log(response)
            setPageView('Success')
        }
      })
      .catch(() => {
        alert("Try Againner")
      })
  } 

  let competition_form =     
  <div className="create-competition">
      <div className="main-section">
        <div className='text-section'>
          <p className='page-title'>CREATE COMPETITION</p>
        </div>
        
        <form onClick={handleForm}>
          <label htmlFor="competition-title">Competition Title</label>
          <input type="text" name='competition-title' id='competition_title' />

          <label htmlFor="competition_tag">Competition Tag</label>
          <input type="text" name='competition_tag' id='competition_tag' />

          <p>Competition Date</p>
          <DatePicker selected={competitionDate} onChange={(date)=> setCompetitionDate(date)}/>

          <button onClick={handleCreateCompetition} id='create-btn' type='button'>CREATE COMPETITION</button>
        </form>
        </div>
    </div>


  if(pageView === 'Form'){
    return(
      <div>
        {competition_form}
      </div>
    )
  } else if(pageView ==='Success'){
    return(
      <div>
        Competition Created Successfully
      </div>
    )
  }

}

export default CreateCompetition
