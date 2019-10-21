import React from 'react';

export default class MovieOfTheWeek extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            loaded: false,
            data: []
        };

        this.url = '';
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        if (this.url) {
            this.setState({ 
                loading: true,
                loaded: false,
                data: []
            })

            fetch(this.url)
                .then(response => response.json())
                .then(data => {
                    this.setState({ 
                        loaded: true,
                        data: data
                    })
                })
                .finally(this.setState({
                    loading: false
                }));
        }
    }

    render() {

        let content = (
            <div className="message">
                <div className="loader"><div></div><div></div><div></div><div></div></div>
                Loading
            </div>
        )
        if (!this.state.loading && this.state.loaded) {
            content = (
                <>
                    <div className="movie">

                        <img src={this.state.data.movie.poster_url} alt={this.state.data.movie.name} />

                        <div>

                            <h3>{this.state.data.movie.name}</h3>

                            <div className="year">2018</div>

                            <div className="genres">

                                {
                                    this.state.data.genres.map(item => {
                                        <span>{item}</span>
                                    })
                                }
                            
                            </div>

                            <div className="starring">
                                <h4>Starring:</h4>

                                <div>
                                    <span>Tom Hardy</span>
                                    <span>Michelle Williams</span>
                                    <span>Riz Ahmed</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </>
            )
        }
        
        return (
            <section className="weekly-movie">

                <h2>Movie of the week</h2>

                { content }

            </section>
        );
    }
}