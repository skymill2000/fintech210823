import Header from "./component/Header";
import EventExample from "./component/EventExample";
import ListComponent from "./component/ListComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/test" exact></Route>
      </Switch>
    </Router>
  );
}

export default App;
