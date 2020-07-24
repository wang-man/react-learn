import React from 'react';


function Header(props) {
  const {title} = props;
  return (
    <div className="header">
      这是header组件，<b>{title}</b>
    </div>
  );
}

export default Header;
