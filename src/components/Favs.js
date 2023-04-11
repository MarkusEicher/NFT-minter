import Fav from './Fav'

const Favs = ({ favorites, onDelete, onExport }) => {
    
  return (
    <div className='Favs'>
      {favorites.map((favorite) => (
        <Fav key={favorite.id} favorite={favorite} onDelete={onDelete} onExport={onExport}/>
      ))}
    </div>
  )
}
 
export default Favs