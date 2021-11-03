import React from 'react';
import {useQuery} from "react-query";
import Planet from "./Planet";
import classes from "./Main.module.scss";


const fetchPlanets = async () => {
  const response = await fetch("https://swapi.dev/api/planets/")
  return response.json()
}


const Planets = () => {
  const {data, status} = useQuery("planets", fetchPlanets)

  return (
    <div>
      <h1>Planets</h1>
      {status === "error" && <div>SOMETHING GO WRONG</div>}
      {status === "loading" && <div>LOADING</div>}
      {status === "success" && <div className={classes.result_container}>
        {data.results.map(planet => <Planet key={planet.name} planet={planet}/>)}
      </div>
      }
    </div>
  );
};
export default Planets