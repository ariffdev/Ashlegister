import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Sidebar from "./Components/SideBar"
import SideNavbar from "./Components/SideNavbar"
import ContentArea from "./Components/ContentArea"



const App = () => {

  return (
    <div className="App">
      <Header/>
      <main>
        <SideNavbar/>
        {/* Start router here */}
          <ContentArea/>
        {/* End router here */}
        <Sidebar/>
      </main>
      <Footer/>
    </div>
  )
}

export default App

