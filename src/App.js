import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoMatch from './components/404';
import Services from './components/Services';
import Service1 from './components/Service1';
import Service2 from './components/Service2';
import Nav from './components/Nav';
import CarsList from './components/CarsList';
import SingleCar from './components/SingleCar';
import SingleCar1 from './components/SingleCar1';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>


        <Route path="/services" exact>
          <Services />
        </Route>

        <Route path="/services/service1">
          <Service1 />
        </Route>

        <Route path="/services/service2" component={Service2}>

        </Route>
        <Route path='/cars' exact>
          <CarsList />
        </Route>
        {/* <Route path='/cars/1'>
          <h1>car 1</h1>
        </Route>
        <Route path='/cars/2'>
          <h1>car 2</h1>
        </Route> */}
        {/* => /cars/1   => id=1 */}
        {/* => /cars/bmw   => id=bmw */}
        {/* => /cars/superman   => id=superman */}
        {/* Method 1: using react-router-dom und useParams*/}
        <Route path='/cars1/:id'>
          <SingleCar />
        </Route>
        {/* Method 2: using class and react  */}
        {/* <Route path='/cars/:id' component={SingleCar1}>

        </Route> */}

        <Route path='/cars/:id' render={(props) => <SingleCar1 {...props} />}>

        </Route>

        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
