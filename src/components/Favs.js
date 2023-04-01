import Fav from './Fav'

const Favs = ({ favorites, onDelete }) => {
    
  return (
    <>
      {favorites.map((favorite) => (
        <Fav key={favorite.id} favorite={favorite} onDelete={onDelete}/>
      ))}
    </>
  )
}

export default Favs