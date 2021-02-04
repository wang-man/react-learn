import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { getHomeData } from './store/actions';
import './index.scss';
import one from '../../assets/img/1.png'
class Editor extends Component {
  constructor(props) {
    super();
    console.log(props)
    console.log(props.location)
  }
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


export default connect(null, mapDispatchToProps)(withRouter(Editor))