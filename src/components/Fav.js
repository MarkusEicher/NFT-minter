import { FaTimes } from 'react-icons/fa';

const Fav = ({ favorite, onDelete, onExport}) => {
  return (
    <div className={`fav ${favorite.type === 'export' ? 'toExport' : ''}`}
        onDoubleClick={() =>
        onExport(favorite.id)}>
        <h3>{favorite.title} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(favorite.id)} /></h3>
        <p>{favorite.uri}</p>
    </div>
  )
}

export default Fav
