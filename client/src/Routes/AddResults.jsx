
import '../Styles/AddResults.css'
import { useState } from 'react'
import axios from 'axios'

const AddResults = ({retrievedCompetitions}) => {
  const API_URL = 'http://127.0.0.1:8000';
  //Stages => Select Competition Stage -> Select Race Stage -> Add Results Stage -> Add More Stage

  
  const SelectCompetitionStage = () => {

    const handleForm = (event) => {
      event.preventDefault();
    }

    const handleSelectCompetition = () => {
      const selected_competition_tag = document.getElementById('competition_tag').value;
      setCurrentStage(<SelectRaceStage selected_competition_tag={selected_competition_tag}/>)
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

    return(
      <div className="select_competition_stage">   
          <div className="create-competition">
              <div className="main-section">
                <div className='text-section'>
                  <p className='page-title'>SELECT COMPETITION</p>
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
                  <button onClick={handleSelectCompetition} id='create-btn' type='button'>SELECT COMPETITION</button>
                </form>
                </div>
            </div>
      </div>
    )
  }

  const SelectRaceStage = ({selected_competition_tag}) => {

    const handleForm = (event) => {
      event.preventDefault();
    }

    const handleSelectRace = () => {
      const selected_race_title = document.getElementById('race_tag').value;
      setCurrentStage(<AddResultsStage selected_competition_tag={selected_competition_tag} selected_race_title={selected_race_title}/>)
    }

    let competition_tags = Object.keys(retrievedCompetitions)

    let competition_details = []
    competition_tags.forEach((competition_tag) => {

      competition_details.push(
        {
        competition_tag: competition_tag,
        competition_name: retrievedCompetitions[competition_tag]['title'],
        competition_date: retrievedCompetitions[competition_tag]['date'],
        Races: retrievedCompetitions[competition_tag]['Races']
      }
      )

    })

    let [specific_competition] = competition_details.filter(competition => competition['competition_tag'] === selected_competition_tag)
    let races = specific_competition.Races
    let race_tags = Object.keys(races)




    return(
      <div className="select_competition_stage">   
          <div className="create-competition">
              <div className="main-section">
                <div className='text-section'>
                  <p className='page-title'>SELECT RACE</p>
                </div>
                
                <form onClick={handleForm}>
                  <p>Select Race</p>
                  <select name="" id="race_tag">
                    {
                      race_tags.map((race) => {
                        return(
                          <option key={race} value={races[race]['race_title]']}> {races[race]['title']} </option>
                        )
                      })
                    }
                  </select>
                  <button onClick={handleSelectRace} id='create-btn' type='button'>SELECT RACE</button>
                </form>
                </div>
            </div>
      </div>
    )
  }



    const AddResultsStage = ({selected_competition_tag, selected_race_title}) => {
      let selected_race_tag = selected_race_title.replace(/\s+/g, '');
      let races = retrievedCompetitions[selected_competition_tag]['Races']
      if(races !== undefined){
        let race_tags = Object.keys(races)

        var race_details = []
          race_tags.forEach((race_tag) => {

          race_details.push(
            {
            race_tag: race_tag,
            gender: races[race_tag]['gender'],
            distance: races[race_tag]['distance'],
            stage: races[race_tag]['stage'],
            title: races[race_tag]['title'],
            Athletes: races[race_tag]['Athletes']
          }
          )
        })

        let [specific_race] = race_details.filter(race => race['title'] === selected_race_title)
        let athletes = Object.keys(specific_race.Athletes)

        const handleForm = (event) => {
          event.preventDefault();
        }

        let marks = {}
        athletes.forEach(athlete => {
          marks[athlete] = 0
        })



        let positions = {}
        athletes.forEach(athlete => {
          positions[athlete] = 0
        })


        const handleMark = (e) => {
          marks[e.target.id] = e.target.value
          console.log(marks)
        }

        const handlePosition = (e) => {
          positions[e.target.id] = e.target.value
          console.log(positions)
        }

        const handleAddResults = () => {
          //Define results information from form here
          const results = {"Results":{}}
          for (const key in marks){
            results['Results'][key] = {
              'mark' : marks[key],
              'position': positions[key],
            }
          results['competition_tag'] = selected_competition_tag
          results['race_tag'] = selected_race_tag
          console.log(results)
          

          
          // Make post request with Axios here
          axios
            .post(API_URL + `/competitions/${selected_competition_tag}/results/${selected_race_tag}`, results)
            .then(response => {
              if(response.status === 200){
                  setCurrentStage(<AddMoreStage/>)
              }
            })
            .catch(() => {
              alert("Try Againner")
            })
        }
        }

        let results_form_table =
          <div className="results_form_table">
            <form onClick={handleForm}>
              <div className="race_table">
                <table>
                  <thead>
                    <tr className="header_row">
                      <th>Name</th>
                      <th>Mark</th>
                      <th>Position</th>
                    </tr>
                  </thead>
                    {/* Dynamic portion of table for athletes */}
                      <tbody>
                        {
                        athletes.map((athlete) => {
                          let athlete_name = specific_race.Athletes[athlete]['name']
                          return(
                            <tr key={athlete}>
                              <td>{athlete_name}</td>
                              <td className='mark'>
                                <input className='mark_input' id={athlete_name} type="number" step='0.01' defaultValue={10.00} onChange={(e)=>handleMark(e)}/>
                              </td>
                              <td className='position'>
                                <select className='position_input' name="" id={athlete_name} onChange={(e)=>handlePosition(e)}>
                                  <option key={1} value="1"> 1 </option>
                                  <option key={2} value="2"> 2 </option>
                                  <option key={3} value="3"> 3 </option>
                                  <option key={4} value="4"> 4 </option>
                                  <option key={5} value="5"> 5 </option>
                                  <option key={6} value="6"> 6 </option>
                                  <option key={7} value="7"> 7 </option>
                                  <option key={8} value="8" selected> 8 </option>
                                </select>
                              </td>
                            </tr>
                          )
                        })
                        }
                      </tbody> 
                </table>
              </div>
                      <button onClick={handleAddResults} id='create-btn' type='button'>ADD RESULTS</button>
                </form>
          </div>

        let race_information = 
        <div className='race_page'>
          <div className="race_title">
            {specific_race.title.toUpperCase()}

            {/* Render a table of athletes assigned to the race with results and everything */}
            {results_form_table}
          </div>
        </div>

        return (
          <>
            {race_information}
          </>
        )
      }
    }

    const AddMoreStage = () => {
    return(
      <div className='success'>
        <div className="message">
          RESULTS ADDED SUCCESSFULLY
        </div>
        <button className="add-another-btn" onClick={() => setCurrentStage(<SelectCompetitionStage/>)}>
          Add More Results
        </button>
      </div>
    )
  }

  const [currentStage, setCurrentStage] = useState(<SelectCompetitionStage/>)

  return(
    <div className="add_results">
      {currentStage}
    </div>
  )
}

export default AddResults
