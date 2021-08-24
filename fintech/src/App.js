import Header from "./component/Header";
import EventExample from "./component/EventExample";
import ListComponent from "./component/ListComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/test" exact>
          <Header title="테스트 페이지 1"></Header>
        </Route>
        <Route path="/test2" exact>
          <Header title="테스트 페이지 2"></Header>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
