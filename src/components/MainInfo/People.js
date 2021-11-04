import React, {useState} from 'react';
import {usePaginatedQuery} from "react-query";
import Person from "./Person";
import "./Main.module.scss"
import Loading from "../Load/Loading";
import classes from "./Main.module.scss";


const fetchPersons = async (key, page) => {
  const response = await fetch(`https://swapi.dev/api/people/?page=${page}`)
  return response.json()
}


const People = () => {
  const [page, setPage] = useState(1)
  const {resolvedData, latestData, status} = usePaginatedQuery(["people", page], fetchPersons)

  return (
    <div>
      {status === "error" && <div>SOMETHING GO WRONG</div>}
      {status === "loading" && <Loading/>}
      {status === "success" && <div className={classes.result_container}>
        {resolvedData.results.map(person => <Person key={person.name} person={person}/>)}
        <div className={`${classes.pages_section} animate__animated animate__backInDown  animate__slow`}>
          <button disabled={page === 1} className={classes.prev_page} onClick={() => setPage(prevState => Math.max(prevState - 1, 1))}>PREV
            PAGE
          </button>
          <span className={classes.page}>{page}</span>
          <button disabled={!latestData || !latestData.next}  className={classes.next_page}
                  onClick={() => setPage(prevState => (!latestData || !latestData.next ? prevState : prevState + 1))}>
            NEXT PAGE
          </button>
        </div>
      </div>
      }
    </div>
  );
};
export default People