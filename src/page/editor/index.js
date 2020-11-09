import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

import { getHomeData } from './store/actions';
import './index.scss';

class Editor extends Component {
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


export default connect(null, mapDispatchToProps)(Editor)