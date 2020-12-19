//-----------------------------------------------------------------------------------------
// IMPORT STATEMENTS
//-----------------------------------------------------------------------------------------
import React, { Component } from 'react';
import MovieList from './Components/MovieList';

//-----------------------------------------------------------------------------------------
// COMPONENT
//-----------------------------------------------------------------------------------------
class App extends Component {

  constructor(){
    super();

    this.state = {  movieList: [],
                    nominations: [],
                    titleSearch: ""}
    this.searchAPI = this.searchAPI.bind(this)

  }

  searchAPI(){
    console.log("Button Clicked");
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=e919a77&s=blade').then(response => response.json()).then(data => {
      this.setState({movieList: data.Search},);
    }).catch(error => console.log('error', error));
  }


  render(){
    return (
      <div>
        <h1>The Shoppies</h1>
        <h2>Search Criteria</h2>
        <p>Movie Title:</p>
        <input type="text"></input>
        <button onClick={this.searchAPI}>Search</button>
        <p>Year</p>
        <input type="number"></input>
        <h2>Movies</h2>
        <div>
        <MovieList data={this.state}/>
        </div>
        <h2>Nominations</h2>
      </div>

      
    )
  }
}

export default App;

