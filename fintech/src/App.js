import logo from "./logo.svg";
import "./App.css";

const Greeting = <h1>hello, react</h1>;

const NameTitle = () => {
  return (
    <>
      <p>안녕하세요 ~ 님 React Program 입니다</p>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>안녕하세요 src/App.js 를 불러왔습니다.</p>
        {Greeting}
        <NameTitle></NameTitle>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          리액트 배우기
        </a>
      </header>
    </div>
  );
}

export default App;
