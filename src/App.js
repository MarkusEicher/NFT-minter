// import React from 'react'; // Import React for using classes
// import './App.css';
import Header from './components/Header';

function App() {

  // const name = "Markus Eicher";
  // const ternary1 = false;

  return (
    <div className="container">

      <Header h1title='PoC Whitelisting and NFT minting dApp using a Merkle Tree'/>

      {/* <h1>This is the h1 text from the div with className "container" defined in the App.js</h1> */}
      <h2>A Proof of Concept dApp for whitelisting Ethereum addresses for later minting of an NFT - Project by Markus Eicher inspired by lessons 9 and 10 of the Sophomore Track from LearnWeb3DAOO</h2>
      {/* <p>My name {name} is inserted here from the const name</p> */}
      {/* <p>This is an example of a ternary operator defined as const x it shows yes or no. It's currently set to {ternary1 ? 'Yes' : 'No'}</p> */}
      
    </div>
  );
}

// Example of a class component definition

// class App extends React.Component {
//   render() {
//     return <h1>This is a hello from a class component</h1>
//   }
// }

export default App;
