//-----------------------------------------------------------------------------------------
// IMPORT STATEMENTS
//-----------------------------------------------------------------------------------------
import React, { Component } from 'react';
import MovieList from './Components/MovieList';
import NominationList from './Components/NominationList';

//-----------------------------------------------------------------------------------------
// COMPONENT
//-----------------------------------------------------------------------------------------
class App extends Component {

  constructor(){
    super();

    this.state = {  movieList: [],
                    nominations: [],
                    titleSearch: "",
                    searchTerm: ""}
    
    //FUNCTIONS
    this.nominateMovie = this.nominateMovie.bind(this);
    this.searchAPI = this.searchAPI.bind(this);
    this.updateSearchTerm = this.updateSearchTerm.bind(this);

  }

  nominateMovie(movie){
    if(this.state.nominations === 0){
      var newArray = [movie]
      this.setState({nominations: newArray})
    } else {
      var i;
      var movieNominated = false;
      for(i=0;i<this.state.nominations.length; i++) {
        if(this.state.nominations[i]=== movie){
          movieNominated = true;
          break;
        }
      }
      if (movieNominated === false && this.state.nominations.length <5){
        var newArray = this.state.nominations
        newArray.push(movie)
        this.setState({nominations: newArray})
      }
    }
    console.log(this.state.nominations)
  }

  searchAPI(e){
    var apiURL = 'http://www.omdbapi.com/?i=tt3896198&apikey=e919a77&s='
    var i;
    for(i=0;i<this.state.searchTerm.length;i++){
      if (this.state.searchTerm[i] !== " "){
        apiURL = apiURL + this.state.searchTerm[i]
      } else if (this.state.searchTerm[i] === " "){
        apiURL = apiURL + "+"
      }
    }

    fetch(apiURL).then(response => response.json()).then(data => {
      this.setState({movieList: data.Search},);
    }).catch(error => console.log('error', error));
  }

  updateSearchTerm(event){
    this.setState({searchTerm: event.target.value});
  }

  render(){
    return (
      <div>
        <div className="banner">
          <img className="award" src="https://github.com/SG-Command/movieapp/blob/master/src/Images/EmmyTrophy.png?raw=true"/>
          <h1 className="shoppies">The Shoppies</h1>
          <img className="award" src="https://github.com/SG-Command/movieapp/blob/master/src/Images/EmmyTrophy.png?raw=true"/>
        </div>
        <hr></hr>
        <div>
          <h2>Search Criteria</h2>
          <label htmlFor="movieTitle">Movie Title:</label>
          <input onChange={this.updateSearchTerm} name="movieTitle" type="text"></input>
          <button type="submit" onClick={this.searchAPI}>Search</button>
        </div>
        <h2>Movies</h2>
        <div>
        <MovieList data={this.state} nominateMovie={this.nominateMovie}/>
        </div>
        <h2>Nominations</h2>
        <NominationList data={this.state}/>
      </div>
    )
  }
}

export default App;

