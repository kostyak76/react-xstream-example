import React from 'react';
import {App} from "./App.component";
import {heroes$, pagination$, pushHeroesUrl, pushNewHeroSearch} from "./Heroes.service";
import {pushHero} from "./Hero.service";


function onSearch(value) {
  pushNewHeroSearch(value);
}

function onPaginate(url) {
  pushHeroesUrl(url);
}

function onSelectHero(hero) {
  pushHero(hero);
}


export class AppContainer extends React.Component {
  removeHeroesListener;
  removePaginationListener;
  state = {
    heroes: [],
    pagination: [],
    isMdScreen: false
  };

  componentDidMount() {
    this.removeHeroesListener = heroes$.subscribe({
      next: heroes => this.setState({heroes: heroes})
    });
    this.removePaginationListener = pagination$.subscribe({
      next: pagination => this.setState({pagination: pagination})
    });
  }

  componentWillUnmount() {
    this.removeHeroesListener();
    this.removePaginationListener();
  }

  render() {
    return <App
      {...this.state}
      onSelectHero={onSelectHero}
      onPaginate={onPaginate}
      onSearch={onSearch}/>
  }
}
