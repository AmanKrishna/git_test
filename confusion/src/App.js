import React from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore'

const store = ConfigureStore();

class App extends React.Component {
  render(){
    console.log("App.js : Render")
    return (
      // Provider is the Cell phone company
      // it allows store to be accessed by all
      // the components(phone)
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main/>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
