import React from 'react';

import MovieReview from './MovieReview.jsx';

export default class App extends React.Component{
    render(){
        return (
            <>
                <h1>The App Component</h1>

                <MovieReview />
            </>
        )
    }
}