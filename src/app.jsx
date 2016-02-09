/**
 * App entry point
 */

// Polyfill
import 'babel-polyfill';

// Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Import LandingPage
import LandingPage from './landingPage';

// ID of the DOM element to mount app on
const DOM_APP_EL_ID = 'app';

// Render the router
ReactDOM.render((
    <LandingPage/>
), document.getElementById(DOM_APP_EL_ID));
