import { useParams } from "react-router-dom"

import '../Styles/Races.css'

const Races = ({retrievedCompetitions}) => {
  let {competition_tag} = useParams();

  console.log(retrievedCompetitions[competition_tag]['Races'])
  let races = retrievedCompetitions[competition_tag]['Races']

  let race_tags = Object.keys(races)

  let race_details = []
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

  let rendering_races = race_details.map(race => {
    return(
      <>
      <h1 className="page-title"> TIMETABLE </h1>
      <div key={race['race_tag']} className="race">
        <p className="race-title">{race['title']}</p>
        <p></p>
      </div>
      </>
    )
  })

  return (
    <div className="Race">
      {rendering_races}
    </div>
  )
}

export default Races