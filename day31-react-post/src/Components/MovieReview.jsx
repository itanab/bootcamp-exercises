import React from 'react';
import MovieFavorite from './MovieFavorite';

export default class MovieReview extends React.Component{

    constructor(props){
        super(props);

        this.movie_id = 488;
        this.state = {
            movie_data: null,
            text: ''
        }
    }

    componentDidMount = () => {
        fetch(`http://www.laravel.test:8080/api/movies/show?id=${this.movie_id}`)
        .then(response => response.json())
        .then(json_data => {
            this.setState({
                movie_data: json_data
            })
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();

        //send POST data to an endpoint
        fetch('http://www.laravel.test:8080/api/review',{
            method: 'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify({
                "movie_id": 488,
                "user_id": 1,
                "text": this.state.text
            })
        })
           

    }

    handleTextChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    render(){
        let movie= 'Loading...';
        if(this.state.movie_data !== null){ //if data already came from fetch
            movie = (
                <div className="movie">
                    <h2>{ this.state.movie_data.name}</h2>
                    <img src= {this.state.movie_data.poster_url} alt="" />
                </div>
            )
        }
        return(

            <>
            <MovieFavorite movie_id={ this.movie_id } />

            <div className="form">
                { movie }
                <form action="" method="post" onSubmit={ this.handleSubmit }>
                    <input type="text" name="text" value={ this.state.text } onChange={ this.handleTextChange } />
                    <input type="submit" value="Submit" />
                </form>
            </div>
           </> 

        )
    }
}