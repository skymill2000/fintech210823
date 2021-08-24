import Header from "./component/Header";
import EventExample from "./component/EventExample";
import ListComponent from "./component/ListComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AxiosTest from "./pages/AxiosTest";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/axios" exact>
          <AxiosTest></AxiosTest>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
