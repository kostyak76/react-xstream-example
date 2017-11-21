import React from 'react';
import {pupulatedHero$} from "./Hero.service";
import {isMdScreen$} from "./Window.service";
import {Hero} from "./Hero.component";
import {Modal} from "./Modal.component";


function isShowModal(hero, isMdScreen) {
  return hero && !isMdScreen;
}


export class HeroContainer extends React.Component {
  removeHeroListener;
  removeIsMdScreenListener;
  state = {
    hero: null,
    isMdScreen: false,
    isShowModal: false //true is !isMdScreen and new hero
  };

  componentDidMount() {
    this.removeHeroListener = pupulatedHero$.subscribe({
      next: hero => this.setState(prevState => ({
        hero: hero,
        isShowModal: isShowModal(hero, prevState.isMdScreen)
      }))
    });
    this.removeIsMdScreenListener = isMdScreen$.subscribe({
      next: value => this.setState(prevState => ({
        isMdScreen: value,
        isShowModal: prevState.isMdScreen ? isShowModal(prevState.hero, value): prevState.isShowModal
      }))
    });
  }

  componentWillUnmount() {
    this.removeHeroListener();
    this.removeIsMdScreenListener();
  }

  closeModal() {
    this.setState({
      isShowModal: false
    });
  }

  render() {
    if (this.state.isMdScreen) {
      //render hero as inline component when mdScreen
      return <Hero hero={this.state.hero} title="Hero Details"/>;
    }
    //use modal to show hero on small screens
    return <Modal
      title="Hero Details"
      onClose={() => this.closeModal()}
      show={this.state.isShowModal}>

      <Hero hero={this.state.hero}/>
    </Modal>
  }
}
