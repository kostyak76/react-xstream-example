import React from 'react';


export const Heroes = ({heroes, onSelect}) => (
  <div className="heroes">
    <h4>Heroes</h4>
    <ul className="heroes list-group">
      {
        heroes.map((hero, i) => (
          <li onClick={() => onSelect(hero)} key={i} className="list-group-item">{hero.name}</li>
        ))
      }
      {
        heroes.length === 0 &&
          <li className="list-group-item">No heroes found</li>
      }
    </ul>
  </div>
);