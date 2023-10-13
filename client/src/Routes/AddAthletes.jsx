
import '../Styles/AddAthletes.css'
import axios from 'axios'
import { useState } from 'react'



const API_URL = "https://ashlegister.onrender.com";

const AddAthletes = ({retrievedCompetitions}) => {
  const [pageView, setPageView] = useState('Form') //variable for controlling the display mode
  const [selectedCompetition, setSelectedCompetition] = useState('')

  const handleSelectedCompetition = () => {
    setSelectedCompetition(document.getElementById('competition_tag').value)
  }
  const handleForm = (event) => {
    event.preventDefault();
  }

  const handleAddAthlete = () => {
    const competition_tag = document.getElementById('competition_tag').value;
    const name = document.getElementById('name').value;
    const distance = document.getElementById('distance_selector').value;
    const gender = document.getElementById('gender_selector').value;
    const stage = document.getElementById('stage_selector').value;
    const race_tag = gender + distance + stage;
    sendAthleteToBackend(competition_tag, name, race_tag)
  }  


    const sendAthleteToBackend = (competition_tag, name, race_tag) => {
    const athlete = 
    {
      'competition_tag': competition_tag, 
      'name': name,
      'race_tag':race_tag,
    }
    
    axios
      .post(API_URL + `/competitions/${competition_tag}/athletes/${race_tag}`, athlete)
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




  let athlete_form =     
  <div className="create-competition">
      <div className="main-section">
        <div className='text-section'>
          <p className='page-title'>ADD ATHLETES</p>
        </div>
        
        <form onClick={handleForm}>
          <label htmlFor="name">Athlete Name</label>
          <input type="text" name='name' id='name' />


          <p>Select Competition</p>
          <select name="" id="competition_tag" onChange={handleSelectedCompetition}>
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

          <button onClick={handleAddAthlete} id='create-btn' type='button'>Add Athlete</button>
        </form>
        </div>
    </div>


  if(pageView === 'Form'){
    return(
      <div>
        {athlete_form}
      </div>
    )
  } else if(pageView ==='Success'){
    return(
      <div className='success'>
        <div className="message">
          ATHLETE ADDED SUCCESSFULLY
        </div>


        <button className="add-another-btn" onClick={() => setPageView('Form')}>
          Add Another Athlete
        </button>

      </div>
    )
  }

}

export default AddAthletes

