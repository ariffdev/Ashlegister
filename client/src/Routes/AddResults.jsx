
import '../Styles/AddResults.css'
import { useState } from 'react'

const AddResults = ({retrievedCompetitions}) => {
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

        let race_table =
        <div className="race_table">
          <table>
            <thead>
              <tr className="header_row">
                <th>Name</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {/* Dynamic portion of table for athletes */}
              {
                athletes.map((athlete) => {
                  return(
                  <tr key={athlete}>
                    <td>{specific_race.Athletes[athlete]['name']}</td>
                    <td>N/A</td>
                  </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>

        let race_information = 
        <div className='race_page'>
          <div className="race_title">
            {specific_race.title.toUpperCase()}

            {/* Render a table of athletes assigned to the race with results and everything */}
            {race_table}
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
        <button className="add-another-btn" onClick={() => setCurrentStage('SelectCompetitionStage')}>
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
