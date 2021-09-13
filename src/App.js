import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/Cards/Cards";
import About from "./Components/About/About";
import {Provider} from "react-redux"
import Store from "./Store/Store"
import {
  BrowserRouter as Router,
    Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <Router>
     <Provider store={Store}>
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Card} />
      <Route path="/About/:shoeDetails" component={About} /> 
      </div>
      </Provider>
    </Router>
  );
}

export default App;
