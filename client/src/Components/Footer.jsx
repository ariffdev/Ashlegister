
import Icon from "@mdi/react"
import { mdiPowerPlug } from "@mdi/js"
import '../Styles/Footer.css'

const Footer = () => {
  return(
    <footer>
      <div className="powered">
        Powered by <Icon className="power-plug" path={mdiPowerPlug} size={1}/>  Hadid
      </div>
    </footer>
  )
}

export default Footer