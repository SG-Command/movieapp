//-----------------------------------------------------------------------------------------
// IMPORT STATEMENTS
//-----------------------------------------------------------------------------------------
import React, { Component } from 'react';

//-----------------------------------------------------------------------------------------
// COMPONENT
//-----------------------------------------------------------------------------------------
class MovieList extends Component {

    constructor(){
        super();

        this.createURL = this.createURL.bind(this)
    }
    
    // FUNCTIONS
    createURL(imdbID){
        var newurl = 'https://www.imdb.com/title/'+imdbID+'/'
        return newurl
    }

    render(){
        return (
        <div>
            <div>
            {this.props.data.movieList.map((movie) => {
                console.log(movie)
                return(
                    <div key={movie.Title}>
                    <a href={this.createURL(movie.imdbID)}>{movie.Title}</a>
                    <p>{movie.Year}</p>
                    <p>{movie.Type}</p>
                    <img src={movie.Poster}></img>
                    <button>Nominate</button>
                    
                    </div>
                )     
            })}
            </div>
        </div>
    )
  }
}

export default MovieList;