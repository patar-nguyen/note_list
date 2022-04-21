import './App.css';
import React, { Fragment } from 'react';
import InputNote from './components/InputNote';
import ListNote from './components/ListNote';

function App() {
  return (
      <Fragment>
        <div className="container">
          <InputNote />
          <ListNote />
        </div>
      </Fragment>
  );
}

export default App;
