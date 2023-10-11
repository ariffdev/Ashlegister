import { useParams } from "react-router-dom"

import '../Styles/Races.css'

const Races = ({retrievedCompetitions}) => {
  let {competition_tag} = useParams();

  let races = retrievedCompetitions[competition_tag]['Races']

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

    var rendering_races = race_details.map(race => {
      console.log(race)
      return(
      <div key={race['race_tag']} className="race">
        <p className="race-title">{race['title']}</p>
        <p></p>
      </div>
      )
    })
  }else{
    rendering_races = "NO RACES YET"
  }

  

  return (
    <div className="Races">
    <h1 className="page-title"> TIMETABLE </h1>
      {rendering_races}
    </div>
  )
}

export default Races