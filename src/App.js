

//route 
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
//end of route


//pages
import Home from "./pages/home";


function App() {
  return (
    <div className="Routes">

      
      <Router>
        <Switch>
          <Route path="/"><Home/></Route>
        </Switch>
      </Router>
      

    </div>
  );
}

export default App;
