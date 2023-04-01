import Fav from './Fav'

const Favs = ({ favorites }) => {
    
  return (
    <>
      {favorites.map((favorite) => (
        <Fav key={favorite.id} favorite={favorite}/>
      ))}
    </>
  )
}

export default Favs