import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="app-view">
      <div className="app-view-main">
        <div className="app-view-card">
          <Card />
        </div>
        <div className="app-view-chart">chart will be here :D</div>
      </div>
      <div className="app-view-footer">
        <h3 id="app-view-footer-text">
          Ape’d by{" "}
          <a
            href="https://twitter.com/b3zrazli4n0"
            target="_blank"
            rel="noreferrer"
          >
            <span>@b3zrazli4n0</span>
          </a>{" "}
          with 💖
        </h3>
      </div>
    </div>
  );
}

export default App;
