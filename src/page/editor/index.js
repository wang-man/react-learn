import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

import { getHomeData } from './store/actions';
import './index.scss';
import one from '../../assets/img/1.png'
class Editor extends Component {
  render() {
    return (
      <Fragment>
        <h1>
          富文本编辑器使用
      </h1>
        <div>
          <img src={one} />
        </div>
      </Fragment>
    )
  }
}

const mapDispatchToProps = {
  getHomeData
}


export default connect(null, mapDispatchToProps)(Editor)