import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../react/App';

const root = ReactDOM.createRoot(document.getElementById('app')!);
const app = React.createElement(App);
root.render(app);
