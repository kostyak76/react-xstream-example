import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {AppContainer} from "./AppContainer.component";

ReactDOM.render(<AppContainer />, document.getElementById('app'));
registerServiceWorker();
