import { useState } from "react";
import axios from "axios";

import Header from "./components/Header";
import Results from "./components/Results";
import Searchbar from "./components/Searchbar";
import Popup from "./components/Popup";


function App() {

  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  })

  const apiurl = "https://www.omdbapi.com/?apikey=4533d35f"

  const handleInput = (e) => {
    let s = e.target.value
    setState({...state, s: s})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

//add if statement to prevent it from submitting if the form is empty

    axios(`${apiurl}&s=${state.s}`)
      .then(({data}) => {
        let results = data.Search
        console.log(results)
        setState({...state, results: results})
      })
      .catch(err => console.log(err))

  } 

  const openPopup = (id) => {
    axios(`${apiurl}&i=${id}`)
      .then(({data}) => {
        let result = data;
        console.log(result)
        setState({...state, selected: result})
      })
      console.log(state.selected)
  }
  
  const closePopup = () => {
    setState({...state, selected: {}})
  }

  return (
    <div className="container">
      <Header/>
      <Searchbar handleSubmit={handleSubmit} handleInput={handleInput}/>
      <Results results={state.results} openPopup={openPopup}/>
      {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup}/> : false}
    </div>
  );
}

export default App;
