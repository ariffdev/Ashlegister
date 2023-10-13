import '../Styles/Competition.css'


const Competition = ({competition}) => {
  if(competition !== undefined){
    return (
      <div className="Competition">
      <span className='competition-name'>{competition.competition_name}</span>
      </div>
    )
  }else{
    return(
      <div>
        NO COMPETITIONS YET
      </div>
    )
  }

}

export default Competition