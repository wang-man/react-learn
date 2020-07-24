import React, { Fragment } from 'react';
import Header from './components/header'
import Refs from './components/refs'
import TestPureComponent from './components/pureComponent'
import './index.scss';


function Listpage() {
  return (
    <Fragment>
      <div className="listpage">
        <Header title="hello" />
        <Refs />
        <TestPureComponent />
      </div>
      <div className='listpage2'>
        <Header title="hello" />
      </div>
    </Fragment>
  );
}

export default Listpage;
