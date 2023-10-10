import '../Styles/Competition.css'


const Competition = ({competition}) => {
  return (
    <div className="Competition">
     <span className='competition-name'>{competition.competition_name.toUpperCase()}</span>
     <span className='competition-date'>{competition.competition_date}</span>
    </div>
  )
}

export default Competition