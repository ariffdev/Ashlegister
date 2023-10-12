import '../Styles/Competition.css'


const Competition = ({competition}) => {
  if(competition !== undefined){
    return (
      <div className="Competition">
      <span className='competition-name'>{competition.competition_name}</span>
      {/* <span className='competition-date'>{competition.competition_date}</span> */}
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