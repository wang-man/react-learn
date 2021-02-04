import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { getHomeData } from './store/actions';
import './index.scss';

class Editor extends Component {
  constructor(props) {
    super();
    console.log(props)
    console.log(props.location)
  }
  render() {
    return (
      <h1>
        富文本编辑器使用
      </h1>
    )
  }
}

const mapDispatchToProps = {
  getHomeData
}


export default connect(null, mapDispatchToProps)(withRouter(Editor))