import '../Styles/Home.css'

import Competition from '../Components/Competition';

import axios from 'axios'
import { useState, useEffect } from 'react';

const API_URL = 'http://127.0.0.1:8000';

const Home = () => {
  const [retrievedCompetitions, setRetrievedCompetitions] = useState([])

  useEffect(() =>{
    axios
        .get(API_URL + '/competitions')
        .then((response) => {
            setRetrievedCompetitions(response.data)
        })

  }, [])


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
  let competitionList = competition_details.map(competition => <Competition key={competition.competition_tag} competition={competition}/>)
  return (
    <div className="HomeRoute">
      <h1 className="home-title">
        COMPETITION LIST
      </h1>
      {competitionList}
    </div>
  )
}

export default Home


