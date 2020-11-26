import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Search from "./components/Search";

function App() {
    return (
        <div className="app">
            <Router>
                <Header />
                <Switch>
                    <Route path="/search">
                        <Search />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
