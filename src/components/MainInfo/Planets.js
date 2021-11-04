import React, {useState} from 'react';
import {usePaginatedQuery} from "react-query";
import Planet from "./Planet";
import classes from "./Main.module.scss"
import Loading from "../Load/Loading";


const fetchPlanets = async (key, page) => {
  const response = await fetch(`https://swapi.dev/api/planets/?page=${page}`)
  return response.json()
}
const Planets = () => {
  const [page, setPage] = useState(1)
  const {resolvedData, latestData, status} = usePaginatedQuery(["planets", page], fetchPlanets)

  return (
    <div>
      {status === "error" && <div>SOMETHING GO WRONG</div>}
      {status === "loading" && <Loading/>}
      {status === "success" && <div className={classes.result_container}>
        {resolvedData.results.map(planet => <Planet key={planet.name} planet={planet}/>)}
        <div className={`${classes.pages_section} animate__animated animate__backInDown  animate__slow`}>
          <button disabled={page === 1} className={classes.prev_page} onClick={() => setPage(prevState => Math.max(prevState - 1, 1))}>
            PREV PAGE
          </button>
          <span className={classes.page}>{page}</span>
          <button disabled={!latestData || !latestData.next} className={classes.next_page}
                  onClick={() => setPage(prevState => (!latestData || !latestData.next ? prevState : prevState + 1))}>
            NEXT PAGE
          </button>
        </div>
      </div>
      }
    </div>
  );
};
export default Planets