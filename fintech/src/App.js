import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddUser from "./pages/AddUser";
import AuthResult from "./pages/AuthResult";
import AxiosTest from "./pages/AxiosTest";
import Balance from "./pages/Balance";
import Main from "./pages/Main";
import NewsSearch from "./pages/NewsSearch";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/axios" exact>
          <AxiosTest></AxiosTest>
        </Route>
        <Route path="/news" exact>
          <NewsSearch></NewsSearch>
        </Route>
        <Route path="/adduser" exact>
          <AddUser></AddUser>
        </Route>
        <Route path="/authResult" exact>
          <AuthResult></AuthResult>
        </Route>
        <Route path="/main" exact>
          <Main></Main>
        </Route>
        <Route path="/balance" exact>
          <Balance></Balance>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
