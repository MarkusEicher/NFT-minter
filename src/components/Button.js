const Button = ({color, text}) => {

    const onClick = () => {
        console.log ('Clicked')
    }

  return <button onClick={onClick} style={{ backgroundColor: color}} className='button'>{text}</button>
}

export default Button