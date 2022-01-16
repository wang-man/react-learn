import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import headerStyle from './index.module.scss';

class Header extends Component {
  render() {
    return (
      <div className={headerStyle.nav}>
        <ul>
          <li>
            <NavLink to='/editor' activeClassName='active'>编辑器</NavLink>
          </li>
          <li>
            <NavLink to='/list'>列表</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}



export default Header