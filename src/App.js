import Navigation from "./components/NavBar/Navigation";
import {useState} from "react";
import Planets from "./components/MainInfo/Planets";
import People from "./components/MainInfo/People";
// import {ReactQueryDevtools} from "react-query-devtools";


const App = () => {
const [page, setPage] = useState("planets")

  return (
    <> <div className={"main_content"}>
      <h1>STAR WARS</h1>
      <Navigation setPage={setPage}/>
      <div>
        {page === "planets" ? <Planets/> : <People/>}
      </div>
    </div>
      {/*<ReactQueryDevtools initialIsOpen={false}/>*/}
    </>

  )
}
export default App



