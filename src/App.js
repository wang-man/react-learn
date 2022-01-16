import React, { Component } from 'react';
import { HashRouter, Route, Switch, withRouter } from 'react-router-dom';
import loadAble from '@loadable/component'
import Header from './page/header';
import Listpage from './page/listPage';
import UseMemo from './page/useMemo';
import UseForwardRef from './page/useForwardRef';
// import Editor from './page/editor';

class App extends Component {

  constructor(props) {
    super(props);
  };

  componentDidMount() {
    const { listen } = this.props.history

    listen(route => {
      console.log('route', route)
    })
  }
  render() {
    return (
      <div className='contanier'>
        <Header />
        <Switch>
          <Route path='/' exact component={Listpage}></Route>
          <Route path='/editor' exact component={loadAble(() => import('./page/editor'))}></Route>
          <Route path='/list' exact component={Listpage}></Route>
          <Route path='/useMemo' exact component={UseMemo}></Route>
          <Route path='/useForwardRef' exact component={UseForwardRef}></Route>
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);
