import '../Styles/Home.css'

import { Link } from 'react-router-dom';

import Competition from '../Components/Competition';


const Home = ({retrievedCompetitions}) => {

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

  let competitionList = competition_details.map(competition => {
    return(
    <Link to={`/races/${competition.competition_tag}`} key={competition['competition_tag']}>
      <Competition  competition={competition}/>
    </Link>
    )
  } )

  if(competitionList !== undefined){
    return (
      <div className="HomeRoute">
        <h1 className="home-title">
          COMPETITION LIST
        </h1>
        {competitionList}
      </div>
    )
  } else{
    return(
      <div className="HomeRoute">
        <h1 className="home-title">
          COMPETITION LIST
        </h1>
        <div>
          NO COMPETITIONS YET
        </div>
      </div>
    )
  }

}

export default Home


