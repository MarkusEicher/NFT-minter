// import React from 'react'; // Import React for using classes
// import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Favs from './components/Favs';


const App = () => {

  const [favorites, setFavorites] = useState([
    {
        "guid": "98fd2sXJQFq_",
        "title": ".NET Tutorials | Microsoft Docs",
        "index": 0,
        "dateAdded": 1619361520865000,
        "lastModified": 1619361527401000,
        "id": 25,
        "typeCode": 1,
        "type": "text/x-moz-place",
        "uri": "https://docs.microsoft.com/en-us/dotnet/core/tutorials/"
    },
    {
        "guid": "tum4MRd7WnpN",
        "title": "Let's Learn .NET: C#",
        "index": 1,
        "dateAdded": 1619299376175000,
        "lastModified": 1619361542481000,
        "id": 21,
        "typeCode": 1,
        "iconUri": "https://d24wuq6o951i2g.cloudfront.net/img/events/id/457/457962743/assets/cd2321239e39aad6ce6bd1e1123aa280.d85.Microsoft-logo_rgb_c-favicon.png",
        "type": "text/x-moz-place",
        "uri": "https://letslearndotnet.splashthat.com/"
    },
    {
        "guid": "780auqrrJa_l",
        "title": "Common NuGet configurations",
        "index": 2,
        "dateAdded": 1619462415340000,
        "lastModified": 1619462430118000,
        "id": 26,
        "typeCode": 1,
        "type": "text/x-moz-place",
        "uri": "https://docs.microsoft.com/en-us/nuget/consume-packages/configuring-nuget-behavior"
    }
])

// Delete an entry from the UI out of the favorites array
const deleteFavorite = (id) => {
  setFavorites(favorites.filter(favorite => favorite.id !== id))
}

  // const name = "Markus Eicher";
  // const ternary1 = false;

  return (
    <div className="container">

      <Header h1title='PoC Whitelisting and NFT minting dApp using a Merkle Tree' h2description = 'A Proof of Concept dApp for whitelisting Ethereum addresses for later minting of an NFT - Project by Markus Eicher inspired by lessons 9 and 10 of the Sophomore Track from LearnWeb3DAOO'/>
      {/* <h1>This is the h1 text from the div with className "container" defined in the App.js</h1> */}
      {favorites.length > 0 ? (<Favs favorites={favorites} onDelete={deleteFavorite}/>) : ('No Favorites to show')}
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
