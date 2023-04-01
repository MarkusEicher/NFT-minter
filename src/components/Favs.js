import Fav from './Fav'

const Favs = ({ favorites, onDelete, onExport }) => {
    
  return (
    <>
      {favorites.map((favorite) => (
        <Fav key={favorite.id} favorite={favorite} onDelete={onDelete} onExport={onExport}/>
      ))}
    </>
  )
}

export default Favs