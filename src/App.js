import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="main">
        <Search />
      </div>
      <p>
        This is an {""}
        <a href="https://github.com/Miniii-git/weather-app-react">
          open-source code
        </a>{" "}
        , by Mini ♥
      </p>
    </div>
  );
}
