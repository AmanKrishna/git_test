import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter} from 'react-router-dom';

class App extends React.Component {
  render(){
    console.log("App.js : Render")
    return (
      <BrowserRouter>
        <div>
          <Main/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
