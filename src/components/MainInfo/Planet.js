import React from 'react';
import classes from "./Main.module.scss";

const Planet = ({planet}) => {
  return (
    <div className={classes.planet_person_info}>
      <h3>{planet.name}</h3>
      <span>Population: {planet.population}</span>
      <p>Territory: {planet.terrain}</p>
    </div>
  );
};

export default Planet;