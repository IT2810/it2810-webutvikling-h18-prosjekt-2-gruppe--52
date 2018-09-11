import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Tekst from './Tekst';

ReactDOM.render(<Tekst kategori1="Reklame" kategori2="Visdomsord" kategori3="Krigsrop"/>, document.getElementById('root'));
registerServiceWorker();
