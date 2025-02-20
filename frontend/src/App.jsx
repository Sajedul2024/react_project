import { useEffect, useState } from 'react'

import './App.css'

import { Component } from 'react'



class App extends Component(props){
  constructor(props){
    super(props);
    this.state = {
      notes : []
    }
  }
}

API_URL = "http://localhost:3000/";

  render() {

function App() {
    const [items, setItems] = useState([])

  useEffect( async() => {

   const fetchdata = async() => {
   const res = await fetch('http://localhost:3000')
   const data = await res.json()
   setItems(data,items)

   }
    fetchdata();
  },[])

  return (
   <div className="App"> 
     <h2>This is React App</h2>
     <ul>
        {items.map(item => (
          <li key={item._id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
      {/* {
        items.map ( i =>{
         
          <p>
         <h2>This is react APP</h2>
            {i.name},{i.description}
          </p>
        }

        )
      }
      */}
    
     </div>
  )

}
}


export default App

