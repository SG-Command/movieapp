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

        this.createURL = this.createURL.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    // FUNCTIONS
    createURL(imdbID){
        var newurl = 'https://www.imdb.com/title/'+imdbID+'/'
        return newurl
    }

    handleClick = (e) => {
        this.props.nominateMovie(e.target.value)
    }

    render(){
        return (
            <div className="movieBox">
            {this.props.data.movieList.map((movie) => {
                console.log(movie)
                return(
                    <div className="movieContainer" key={movie.Title}>
                        <img className ="poster" src={movie.Poster}></img>
                        <a className="title" href={this.createURL(movie.imdbID)}>{movie.Title}</a>
                        <div className="yearContainer">
                            <span className="descYear">Year:</span>
                            <span className="year">{movie.Year}</span>
                        </div>
                        <button className="nominateBtn" value={movie.Title} onClick={this.handleClick}>Nominate</button>
                    </div>
                )     
            })}
            </div>
    )
  }
}

export default MovieList;