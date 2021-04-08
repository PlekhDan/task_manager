import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {Menu} from "./components/Menu";
import {Welcome} from "./components/Welcome";
import {Dashboard} from "./components/Dashboard/Dashboard";
import {Reg} from "./components/Reg";
import {TaskView} from "./components/Dashboard/TaskView";

function App() {
    return (
            <BrowserRouter>
                <Route exact path="/" render={() => <Menu/>}/>
                {/*<Route path="/create" render={() =>  }/>*/}
                <Welcome/>
                <Route path="/reg" render={()=><Reg/>}/>
                <Dashboard/>
                <TaskView/>
            </BrowserRouter>
    );
}

export default App;
