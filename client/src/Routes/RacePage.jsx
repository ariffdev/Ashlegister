import '../Styles/RacePage.css'
import { useParams } from 'react-router-dom';

const RacePage = ({retrievedCompetitions}) => {
    let {competition_tag, race_tag} = useParams();
  // if logged in as admin, show race information and additional buttons for adding athletes and adding result, else just show race information
  let races = retrievedCompetitions[competition_tag]['Races']
  console.log(races)

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
        title: races[race_tag]['title']
      }
      )
    })

    let specific_race = race_details.filter(race => race['race_tag'] === race_tag)
    console.log(specific_race)

    let race_information = 
    <div>
      <div className="race_title">
        {/* Render a table of athletes assigned to the race with results and everything */}
        {specific_race[0].title}
      </div>
    </div>

    return (
      <>
        {race_information}
      </>
    )
  }
}

export default RacePage