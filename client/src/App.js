import { Route } from "react-router-dom";
import "./App.css";
import Game from "./components/Game";
import Homepage from "./components/Homepage";

const App = () => {
    return (
        <div className="App">
            <Route path="/" exact component={Homepage} />
            <Route path="/play" exact component={Game} />
            <footer className="app-footer">
                <p>
                    Crafted with 🧠 and ❤️ by{" "}
                    <a
                        href="https://www.linkedin.com/in/sakshguptavit/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Saksham Gupta
                    </a>
                </p>
            </footer>
        </div>
    );
};

export default App;
