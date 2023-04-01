// import React from 'react'
// import logo from './MECS-Logo-Icon.png';
// import './App.css';
import Button from "./Button"
const Header = (props) => {
  return (
    <header className='header'>
      <h1>{props.h1title}</h1>
      <h2>{props.h2description}</h2>
      <Button color='green' text='Click me'/>
    </header>
  )
}

Header.defaultProps = {
  h1title: 'Inserted by default props in Header.js',
  h2description: 'Inserted by default props in Header.js'
}

export default Header