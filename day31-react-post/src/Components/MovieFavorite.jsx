/*
 render it somewhere in its render() method, giving it the movie_id as a prop*/

import React from 'react';



export default class MovieFavorite extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            favorite: null
        };
    }

    componentDidMount = () => {
        fetch(`http://www.laravel.test:8080/api/movies/favorite?user_id=1&movie_id=${this.props.movie_id}`)
        .then(response => response.json())
        .then(json_data => {
            this.setState({
                favorite: json_data.favorite
            })
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        //runs another AJAX request with post
        fetch('http://www.laravel.test:8080/api/movies/favorite/toggle',{
            method: 'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify({
                "movie_id": this.props.movie_id,
                "user_id": 1,

            })
        })
        .then(response => response.json())
        .then(json_data => {
            this.setState({
                favorite: json_data.data.favorite
            })
        })
    }

    render (){
        //label for the submit button
        let label ='Favorite this movie';
        
        if(this.state.favorite){
            label= 'Unfavorite this movie';
        }
        return (

            <div className="favorite">
                <form action="" method="get" onSubmit={ this.handleSubmit }>
                        <button> { label } </button>
                </form>
            </div>
    )}
}