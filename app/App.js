import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';

import routes from './config/routes';

class App extends React.Component {
  render(){
    // console.log(routes)
    return (
      <Router>{routes}</Router>
    )    
  }
}
ReactDOM.render(<App />, document.getElementById('app'));

export default App;