import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {Menu} from "./components/Menu";
import {Welcome} from "./components/Welcome";
import {Dashboard} from "./components/Dashboard/Dashboard";

function App() {
    return (
            <BrowserRouter>
                <Route exact path="/" render={() => <Menu/>}/>
                {/*<Route path="/create" render={() =>  }/>*/}
                <Welcome/>
                <Dashboard/>
            </BrowserRouter>
    );
}

export default App;
