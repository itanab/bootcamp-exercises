import React from 'react';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="game">

               <h2>{this.props.name}</h2> 

               <div className="data">
                    <img src={this.props.image_url}></img>

                    <div className="text">
                        <div className="description">
                            <p>{this.props.description}</p>      
                        </div>
                        <div className="rating">
                            <h4>Rating: {this.props.rating}</h4>
                        </div>
                        <div className="releasedDate">
                            <p>Released at: {this.props.released_at}</p>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}