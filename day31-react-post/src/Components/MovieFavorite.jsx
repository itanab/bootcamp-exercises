/*
 render it somewhere in its render() method, giving it the movie_id as a prop*/

import React from 'react';



export default class MovieFavorite extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            favorite=null
        }
    }

    componentDidMount = () => {
        fetch(`http://www.laravel.test:8080/api/movies/favorite?user_id=1&movie_id=${this.props.movie_id}`)
        .then(response => response.json())
        .then(json_data => {
            this.setState({
                movie_data: json_data
            })
        })
    }

    render (){
        return <div className="fav">
            <h1>favorite</h1>
        </div>
    }
}