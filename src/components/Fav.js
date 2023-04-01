import { FaTimes } from 'react-icons/fa';

const Fav = ({ favorite, onDelete }) => {
  return (
    <div className="fav">
        <h3>{favorite.title} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(favorite.id)} /></h3>
        <p>{favorite.uri}</p>
    </div>
  )
}

export default Fav
