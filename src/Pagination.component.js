import React from 'react';


export const Pagination = ({pagination, onPaginate}) => {
  let [previous, next] = pagination;

  return (
    <div className="pagination btn-group btn-group-sm">
      {
        previous &&
        <button type="button" className="btn btn-secondary" onClick={() => onPaginate(previous)}>prev</button>
      }
      {
        next &&
        <button type="button" className="btn btn-secondary" onClick={() => onPaginate(next)}>next</button>
      }
    </div>
  );
};