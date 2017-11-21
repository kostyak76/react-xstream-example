import xs from 'xstream';
import {buildStreamAndPusher} from "./utils";


function toResponseDataFromUrl(url) {
  return xs.fromPromise(fetch(url).then(resp => resp.json()));
}

let [heroRawData$, pushHero] = buildStreamAndPusher();

export {pushHero};

const heroSpecieNames$ = heroRawData$.map(hero => {
  let speciesPromises = hero.species.map(url => fetch(url).then(resp => resp.json()));
  return xs.fromPromise(Promise.all(speciesPromises));
})
  .flatten()
  .map(species => species.map(specie => specie.name))
  .debug('heroSpecies');

const heroHomeWorld$ = heroRawData$.map(hero => toResponseDataFromUrl(hero.homeworld))
  .flatten()
  .debug('heroHomeworld');

export const pupulatedHero$ = xs.combine(heroRawData$, heroSpecieNames$, heroHomeWorld$)
  .map(([heroRaw, heroSpecieNames, heroHomeworld]) => ({
    name: heroRaw.name,
    species: heroSpecieNames,
    birth_year: heroRaw.birth_year,
    gender: heroRaw.gender,
    homeworld: heroHomeworld
  }));
