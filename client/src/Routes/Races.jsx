import { useParams } from "react-router-dom"

import '../Styles/Races.css'

import { Link } from "react-router-dom";

import axios from 'axios'
import { useState, useEffect } from "react";



const Races = () => {
  const API_URL = "https://ashlegister.onrender.com";

  const [comps, setComps] = useState()

  let {competition_tag} = useParams();

  let races;


useEffect(() => {
  axios
  .get(API_URL + '/competitions')
  .then((response) => {
    setComps(response.data)
    console.log(comps)
  })
},[])



try{
  races = comps[competition_tag]['Races'];
}
catch{
  console.log('Something not working')
}

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
      }
      )
    })

    var rendering_races = race_details.map(race => {
      return(
    <Link to={`/races/${competition_tag}/${race.race_tag}`} key={race['race_tag']}>
      <div key={race['race_tag']} className="race">
        <p className="race-title">{race['title']}</p>
      </div>
    </Link>
      )
    })
  }else{
    rendering_races = 
    <div className="none-yet">
          NO RACES YET
    </div>
  }

  

  return (
    <div className="Races">
    <h1 className="page-title"> TIMETABLE </h1>
      {rendering_races}
    </div>
  )
}

export default Races