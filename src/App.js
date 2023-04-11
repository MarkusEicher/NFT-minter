// import React from 'react'; // Import React for using classes
import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Favs from './components/Favs';
import { AddFavs } from './components/AddFavs';


const App = () => {

  const [showAddFavs, setshowAddFavs] = useState(false)
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const getFavorites = async () => {
      const favoritesFromServer = await fetchFavorites()
      setFavorites(favoritesFromServer)
    }

    getFavorites()
  }, [])

// Fetch the favorites from the API
const fetchFavorites = async () => {
  const res = await fetch('http://localhost:5000/urls')
  const data = await res.json()

  // console.log(data)
  return data
}

// Fetch the favorites from the API
const fetchFavorite = async (id) => {
  const res = await fetch(`http://localhost:5000/urls/${id}`)
  const data = await res.json()

  // console.log(data)
  return data
}

// Add an entry to the UI out of the favorites array
const addFavorite = async (favorite) => {

  const res = await fetch ('http://localhost:5000/urls', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(favorite),
  })

  const data = await res.json()

  setFavorites([...favorites, data])

  // console.log(favorites)
  // const id = Math.floor(Math.random() * 
  // 10000) +1 
  // console.log(id)
  // const newFavorite = { id, ...favorite }
  // setFavorites ([...favorites, newFavorite])
}


// Delete an entry from the UI out of the favorites array
const deleteFavorite = async (id) => {

  await fetch(`http://localhost:5000/urls/${id}`, {
    method: 'DELETE'
  })

  setFavorites(favorites.filter((favorite) => favorite.id !== id))
}


// Mark a specific Favorite to be exported
const exportFavorite = async (id) => {
  
  const favToExport = await fetchFavorite(id)
  const updFavorite = {...favToExport, toExport: !favToExport.toExxport} 

  setFavorites(favorites.map((favorite) => favorite.id === id ? {...favorite, type: 'export'} : favorite))
  
  setFavorites(favorites.map((favorite) => {
    if (favorite.id === id) {
      if (favorite.type === 'export') {
        favorite.type = '';
      } else {
        favorite.type = 'export';
      }
      return {...favorite};
    }
    return favorite;
  }));

}

  // const name = "Markus Eicher";
  // const ternary1 = false;

  return (
    <div className="container">

      <Header onAdd={() => setshowAddFavs(!showAddFavs)} showAddForm={showAddFavs} h1title='Jumpstation - Favorites or Bookmarks manager with export function' h2description = 'Jumpstation Bookmark Manager - Export Favorites from your Browser to a website - Automatic and manual export of Bookmarks into card like web objects'/>
      {showAddFavs && < AddFavs onAdd={addFavorite}/>}
      {/* <h1>This is the h1 text from the div with className "container" defined in the App.js</h1> */}
      {favorites.length > 0 ? (<Favs favorites={favorites} onDelete={deleteFavorite} onExport={exportFavorite} />) : ('No Favorites to show')}
      {/* <p>My name {name} is inserted here from the const name</p> */}
      {/* <p>This is an example of a ternary operator defined as const x it shows yes or no. It's currently set to {ternary1 ? 'Yes' : 'No'}</p> */}
      
      
    </div>
  )
}

// Example of a class component definition

// class App extends React.Component {
//   render() {
//     return <h1>This is a hello from a class component</h1>
//   }
// }

export default App;
