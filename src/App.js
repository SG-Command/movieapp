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
    this.removeDuplicates = this.removeDuplicates.bind(this);
    this.createArrayofTitleKey = this.createArrayofTitleKey.bind(this);

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
      this.removeDuplicates(data.Search);
      this.setState({movieList: data.Search},);
    }).catch(error => console.log('error', error));
  }

  removeDuplicates(movieArray){
    var adjMovieArray = movieArray;
    var noDuplicates = false;
    while (noDuplicates === false) {
      var i;
      noDuplicates = true;
      var titleList = this.createArrayofTitleKey(adjMovieArray);
      /*Loops through the titleList until it finds a duplicate. Breaks after a duplicate is found to avoid indexing issues.*/
      for (i=0; i<titleList.length;i++){
        if(titleList.indexOf(titleList[i]) !== i){
          adjMovieArray.splice(i,1);
          noDuplicates = false;
          break;
        }
      }
    }
  }

  createArrayofTitleKey(objectList){
    var i;
    var keyList = [];
    for(i=0;i<objectList.length;i++){
      keyList.push(objectList[i].Title);
    }
    return keyList;
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
        <div className="searchBox">
          <h2 className="searchHeader">Search Criteria</h2>
          <label className="searchLabel" htmlFor="movieTitle"></label>
          <input className ="searchTerm" placeholder="Enter a Movie..." onChange={this.updateSearchTerm} name="movieTitle" type="text"></input>
          <button className="searchBtn" type="submit" onClick={this.searchAPI}>Search</button>
        </div>
        <NominationList data={this.state}/>
        <h2 className = "movieHeader" >Movies</h2>
        <div>
        <MovieList data={this.state} nominateMovie={this.nominateMovie}/>
        </div>
      </div>
    )
  }
}

export default App;

