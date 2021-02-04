import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './index.scss';

class Header extends Component {
  render() {
    return (
      <div className='header'>
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