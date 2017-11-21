import React from 'react';


export const Hero = ({hero, title = ''}) => {
  if (!hero) {
    return false;
  }
  let heroSpecies = (hero.species || []).join(', ');
  let homeWorld = null;
  if (hero.homeworld) {
    homeWorld = (
      <div className="home-world row">
        <div className="home-world__label col-4">Name:</div>
        <div className="col-8">{hero.homeworld.name}</div>
        <div className="home-world__label col-4">Climate:</div>
        <div className="col-8">{hero.homeworld.climate}</div>
        <div className="home-world__label col-4">Terrain:</div>
        <div className="col-8">{hero.homeworld.terrain}</div>
      </div>
    );
  }

  return (
    <div className="hero">
      <h5>{title}</h5>
      <div><span className="hero__label">Name: </span>{hero.name}</div>
      <div><span className="hero__label">Species: </span>{heroSpecies || null}</div>
      <div><span className="hero__label">Year of birth: </span>{hero.birth_year}</div>
      <div><span className="hero__label">Gender: </span>{hero.gender}</div>
      <div className="h7 mt-3">Homeworld</div>
      {homeWorld}
    </div>
  );
};
