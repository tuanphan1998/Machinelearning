import React, { Component } from 'react';
import KOKOBAY from './dieuhuongurl';
import { BrowserRouter as Router} from "react-router-dom";
class App extends Component {
  render() { 
    return (
    <Router>
       <KOKOBAY/>
    </Router>
    );
  }
}
 
export default App;