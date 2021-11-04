import Navigation from "./components/NavBar/Navigation";
import {useState} from "react";
import Planets from "./components/MainInfo/Planets";
import People from "./components/MainInfo/People";


const App = () => {
const [page, setPage] = useState("")

  return (
    <> <div className={"main_content"}>
      <h1 className={"animate__animated animate__tada animate__slow"}>STAR WARS</h1>
      <Navigation setPage={setPage}/>
      <div>
        {page === "planets" ? <Planets/> : ""}
        {page === "people" ? <People/> : ""}
      </div>
    </div>
    </>

  )
}
export default App



