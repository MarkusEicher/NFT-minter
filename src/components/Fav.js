const Fav = ({ favorite }) => {
  return (
    <div className="fav">
        <h3>{favorite.title}</h3>
        <p>{favorite.uri}</p>
    </div>
  )
}

export default Fav
