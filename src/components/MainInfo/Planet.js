import React from 'react';
import classes from "./Main.module.scss"

const Planet = ({planet}) => {
  return (
    <div className={`${classes.planet_person_info} animate__animated animate__backInDown  animate__slow`}>
      <span>{planet.name}</span><span>Population: {planet.population}</span><span>Diameter: {planet.diameter}</span>
    </div>
  );
};

export default Planet;