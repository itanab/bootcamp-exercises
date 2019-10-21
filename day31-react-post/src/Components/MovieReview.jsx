import React from 'react';

export default class MovieReview extends React.Component{

    constructor(props){
        super(props);

        this.movie_id = 488;
    }

    componentDidMount = () => {
        fetch(`http://www.laravel.test:8080/api/movies/show?id=${this.movie_id}`)
        .then(response => response.json())
        .then(json_data => {
            console.log(json_data);
        })
    }


    render(){
        return(
            <form action="">
                <input type="submit" value="Submit" />
            </form>

        )
    }
}