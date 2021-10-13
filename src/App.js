import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import {Switch,Route} from 'react-router-dom'
import Nav from './Components/Nav';
import Home from './Components/Home';
import Service from './Components/Service';
import Contact from './Components/Contact'
import About from './Components/About';
function App() {
  return (
    <div className="App">
         <Nav/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/service" component={Service}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        
      </Switch>
    </div>
  );
}

export default App;
