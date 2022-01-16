import React, { Fragment, Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

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
            <Link to='/list'>列表</Link>
          </li>
        </ul>
      </div>
    )
  }
}



export default Header