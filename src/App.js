import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Countries from './Components/Countries/Countries';
import Person from './Components/Person/Person';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';



function App(){
  return(
      <div className="App">
        <Header></Header>
        <Countries></Countries>
        <Footer></Footer>

      </div>
  )
}

// function LoadCountries (){
//   const [countries,setCountries] = useState([])
//   useEffect(()=>{
//     fetch("https://restcountries.com/v3.1/all")
//     .then(res => res.json())
//     .then(data =>setCountries(data))
//   },[])

//   return(
//     <div>
//       <h1>Visiting every countries.</h1>
//       <h3>Available countries : {countries.length}</h3>
//       {
//         countries.map(country => <Country name={country.name.common} population={country.name.population}></Country>)
//       }
//     </div>
//   )
// }
// function Country(props){
//   return(
//     <div>
//       <h2>Name: {props.name}</h2>
//       <h4>Population : {props.population}</h4>
//     </div>
//   )
// }
export default App;
