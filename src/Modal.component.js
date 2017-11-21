import React from 'react';


export const Modal = ({show, onClose, title, children}) => {
  if (!show) {
    return false;
  }

  return (<div>
      <div id="exampleModalLive" className="modal fade show" tabIndex="-1" role="dialog"
           style={{
             display: 'block',
             paddingRight: '15px'
           }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLiveLabel">{title}</h5>
              <button type="button" className="close" data-dismiss="modal">
                <span onClick={onClose}>×</span>
              </button>
            </div>
            <div className="modal-body">
              {children}
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"/>
    </div>
  )
};
