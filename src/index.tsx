import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HotspotSpec, SceneSpec} from "./types/types";
import {enableMapSet} from 'immer'
import Hotspot from "./components/Hotspot";

enableMapSet()

const scenes = [{
    isCurrent: true,
    key: "1",
    // hotspots: [{
    //     element: <Hotspot
    //       onClick={() => console.log('go to scenes 1')}
    //       transform={{coords: {yaw: -1.7, pitch: -1, radius: 100}}}/>
    //   }],
    imageUrl: require('./assets/images/20201102_152648.jpg'),
    type: 'equirect'
  },
  {
    key: "2",
    // hotspots: [{
    //     element: <Hotspot
    //       onClick={() => console.log('go to scenes 2')}
    //       transform={{coords: {yaw: -1.7, pitch: -1, radius: 100}}}/>
    //   }],
    imageUrl: require('./assets/images/20201102_152648.jpg'),
    type: 'equirect'
  }]
const defaultScene = { current: true, imageUrl: require('./assets/images/20201102_152648.jpg'), type: 'equirect' }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
