import React from 'react';
import classes from "./Nav.module.scss";

const Navigation = ({setPage}) => {
  return (
    <div className={classes.btn_container}>
      <button className={classes.planets_btn} onClick={() => setPage("planets")}>PLANETS</button>
      <button className={classes.people_btn} onClick={() => setPage("people")}>PEOPLE</button>

    </div>
  );
};

export default Navigation;