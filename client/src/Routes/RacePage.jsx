import '../Styles/RacePage.css'
import { useParams } from 'react-router-dom';

const RacePage = ({retrievedCompetitions}) => {
  let {competition_tag, race_tag} = useParams();
  // if logged in as admin, show race information and additional buttons for adding athletes and adding result, else just show race information
  let athletes = retrievedCompetitions[competition_tag]['Races'][race_tag]['Athletes']
  let races = retrievedCompetitions[competition_tag]['Races']


  if(athletes !== undefined){
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
        Athletes: races[race_tag]['Athletes'],
        Results: races[race_tag]['Results']['Results']
      }
    )
      })

    let [specific_race] = race_details.filter(race => race['race_tag'] === race_tag)

    let athletes = Object.keys(specific_race.Athletes)

    let race_table = 
    <div className="race_table">
      <table>
        <thead>
          <tr className="header_row">
            <th>Name</th>
            <th>Mark</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {/* Dynamic portion of table for athletes */}
          {
            athletes.map((athlete) => {
              return(
              <tr key={athlete}>
                <td>{specific_race.Athletes[athlete]['name']}</td>

                <td>
                  {
                  specific_race.Results[athlete]['mark'] !== 0
                   ?
                  specific_race.Results[athlete]['mark'] 
                  : 
                  'N/A'
                 }
                 </td>

                <td>
                  {
                  specific_race.Results[athlete]['position'] !== 0
                   ?
                  specific_race.Results[athlete]['position'] 
                  : 
                  'N/A'
                 }
                 </td>
              </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  

    var race_information = 
    <div className='race_page'>
      <div className="race_title">
        {specific_race.title.toUpperCase()}

        {/* Render a table of athletes assigned to the race with results and everything */}
        {race_table}
      </div>
    </div>
  } else{
    race_information = 
    <div className="none-yet">
          NO ATHLETES YET
    </div>

  }

  return (
    <>
      {race_information}
    </>
  )
} 



export default RacePage