import React from 'react';
import {SearchHero} from "./SearchHero.component";
import {Heroes} from "./Heroes.component";
import {Pagination} from "./Pagination.component";
import {Modal} from "./Modal.component";
import {HeroContainer} from "./HeroContainer.component";


export const App = ({onSearch, onSelectHero, onPaginate, heroes, pagination}) => (
  <div className="row">
    <div className="col-md-6">
      <SearchHero onSearch={onSearch}/>
      <HeroContainer/>
    </div>
    <div className="col-md-6">
      <Heroes heroes={heroes} onSelect={onSelectHero}/>
      <Pagination pagination={pagination} onPaginate={onPaginate}/>
    </div>
    <Modal/>
  </div>
);
