// import React from 'react'
// import logo from './MECS-Logo-Icon.png';
import '../App.css';
import Button from "./Button"

const Header = ({h1title, h2description, onAdd, showAddForm}) => {
  
  // const onClick = () => {
  //   console.log('clicked')
  // }

  return (
    <header className='header'>
      <h1>{h1title}</h1>
      <h2>{h2description}</h2>
      <Button color={showAddForm ? 'red' : 'green'} text={showAddForm ? 'Close Form' : 'Add Favorite'} onClick={onAdd}/>
    </header>
  )
}

Header.defaultProps = {
  h1title: 'Inserted by default props in Header.js',
  h2description: 'Inserted by default props in Header.js'
}

export default Header