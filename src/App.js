import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {Menu} from "./components/Menu";
import {Welcome} from "./components/Welcome";
import {Dashboard} from "./components/Dashboard/Dashboard";
import {Reg} from "./components/Reg";
import {TaskView} from "./components/Dashboard/TaskView";
import {Task} from "./components/Dashboard/Task";

function App() {
    return (
            <BrowserRouter>
                <Route path="/" render={() => <Menu/>}/>
                {/*<Route path="/create" render={() =>  }/>*/}
                {/*<Route exact path="/" render={()=><Welcome/>}/>*/}
                <Route path="/reg" render={()=><Reg/>}/>
                <Route path="/" render={()=><Dashboard/>}/>
                <Route path="/task/:id" render={(props) => <TaskView {...props} /> } />
            </BrowserRouter>
    );
}

export default App;
