import React, { PropTypes, Component } from 'react';

import './App.css';
import Route from './route';
import Header from './header/HeaderBar';

// eslint-disable-next-line
class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Route />
      </div>
    );
  }
}

// App.propTypes = {
//   // eslint-disable-next-line
//   children: PropTypes.object.isRequired,
// };
export default App;
