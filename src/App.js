import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainComponent } from "./components/MainComponent";
import { Component } from 'react';

class App extends Component {
  componentDidMount() {
    document.title = 'kajc.dev';
  }

  render() {
    return (
        <div className="App">
          <MainComponent/>
        </div>
    );
  }
}
export default App;