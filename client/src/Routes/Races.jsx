import { useParams } from "react-router-dom"

const Races = ({retrievedCompetitions}) => {
  let {competition_tag} = useParams();

  console.log(retrievedCompetitions[competition_tag]['Races'])
  return (
    <div className="Race">
      Race
    </div>
  )
}

export default Races