import React from 'react';
import {useQuery} from "react-query";
import Person from "./Person";
import classes from "./Main.module.scss";


const fetchPersons = async () => {
  const response = await fetch("https://swapi.dev/api/people/")
  return response.json()
}


const People = () => {
  const {data, status} = useQuery("People", fetchPersons)

  return (
    <div>
      <h1>People</h1>
      {status === "error" && <div>SOMETHING GO WRONG</div>}
      {status === "loading" && <div>LOADING</div>}
      {status === "success" && <div className={classes.result_container}>
        {data.results.map(person => <Person key={person.name} person={person}/>)}
      </div>
      }
    </div>
  );
};
export default People