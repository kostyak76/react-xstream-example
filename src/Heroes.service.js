import xs from 'xstream';
import debounce from 'xstream/extra/debounce'
import {buildStreamAndPusher} from "./utils";


const HERO_URL = 'https://swapi.co/api/people';


let [heroUrls$, pushHeroesUrl] = buildStreamAndPusher();

export {pushHeroesUrl};
heroUrls$ = heroUrls$.startWith(HERO_URL);


let [searchHeroStr$, pushNewHeroSearch] = buildStreamAndPusher();

export {pushNewHeroSearch};

const searchHeroUrl$ = searchHeroStr$
  .compose(debounce(300))
  .map(searchCriteria => HERO_URL + '/?search=' + searchCriteria);


export const heroesRaw$ = xs.merge(heroUrls$, searchHeroUrl$).map(url => xs.fromPromise(fetch(url)))
  .flatten()
  .map(response => xs.fromPromise(response.json()))
  .flatten()
  .debug('rawHeroes');


export const heroes$ = heroesRaw$.map(heroesRaw => heroesRaw['results'])
  .debug('heroes');


export const pagination$ = heroesRaw$.map(heroesRaw => [heroesRaw['previous'], heroesRaw['next']])
  .debug('pagination');
