import React from 'react';
import ReactDOM from 'react-dom';
import List from './List/List.jsx';

import './index.scss';
import './index.html';

class App extends React.Component {
  render() {
    return (
      <>
        <List
          url="http://www.cbp-exercises.test:8080/day27-laravel-oop/workout/mysql.php?orderby=rating&way=desc"
        />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
