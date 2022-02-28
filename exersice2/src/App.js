import Header from './components/Header';
import List from './components/List';
import Buttons from './components/Buttons';
import './App.css';
import { useState } from 'react';





function App() {



  const [benneItems ,setBenneItems] = useState([
    { 

      id:1,
      qty: 0,
      name: "ltr Maito"

    },
    { 

      id:2,
      qty: 0,
      name: "kpl Banaani"

    },
    { 

      id:3,
      qty: 0,
      name: "Leipä"

    },
    { 

      id:4,
      qty: 0,
      name: "kpl Kananmunia"
      
    },
    {

      id:5,
      qty: 0,
      name: "Kg Sokeria"
    }

  ]);




const onAddition = (idCheck) =>{

var randomNumber = Math.floor(Math.random() *10) +1;

let newbenneItems = [...benneItems];

let itemClickedIdex = newbenneItems.findIndex(i => idCheck === i.id);

if(itemClickedIdex != -1) {

  let newElement = {...newbenneItems[itemClickedIdex]}
  newElement.qty = newElement.qty + randomNumber;
  newbenneItems[itemClickedIdex] = newElement;

  setBenneItems(newbenneItems);
}

}



  return (
    <div className="App">
    <Header />
    <List List={benneItems} />
    <Buttons Listaus= { onAddition } />

    </div>
  );
}

export default App;
