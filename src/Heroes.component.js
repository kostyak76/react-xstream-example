import React from 'react';


export const Heroes = ({heroes, onSelect}) => (
  <div className="heroes">
    <h4>Heroes</h4>
    <ul className="heroes list-group">
      {
        heroes.map((hero, i) => (
          <li key={i} className="list-group-item">
            {hero.name}
            <span onClick={() => onSelect(hero)}
                  className="badge badge-secondary badge-warning active-link item-align-right">see more</span>
            </li>
        ))
      }
      {
        heroes.length === 0 &&
          <li className="list-group-item">No heroes found</li>
      }
    </ul>
  </div>
);