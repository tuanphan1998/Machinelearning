import React, { Component } from 'react';
import KOKOBAY from './dieuhuongurl';
import { BrowserRouter as Router} from "react-router-dom";
import AuthProvider from './Auth'
class App extends Component {
  render() { 
    return (
      <AuthProvider>
        <Router>
          <KOKOBAY/>
        </Router>
    </AuthProvider>
    );
  }
}
 
export default App;