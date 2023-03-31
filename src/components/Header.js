import React from 'react'
// import logo from './MECS-Logo-Icon.png';
// import './App.css';

const Header = (props) => {
  return (
    <header>
      <h1>{props.h1title}</h1>
    </header>
  )
}

Header.defaultProps = {
  h1title: 'Inserted by default props in Header.js'
}

export default Header