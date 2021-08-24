import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import EventExample from "./component/EventExample";
import ListComponent from "./component/ListComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header title="메인화면"></Header>
        <ListComponent></ListComponent>
      </header>
    </div>
  );
}

export default App;
