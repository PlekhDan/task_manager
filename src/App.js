import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {Menu} from "./components/Menu";
import {Welcome} from "./components/Welcome";
import {Dashboard} from "./components/Dashboard/Dashboard";
import {Reg} from "./components/Reg";
import {TaskView} from "./components/Dashboard/TaskView";
import {Task} from "./components/Dashboard/Task";
import {Auth} from "./components/Auth";

function App() {
    return (
            <BrowserRouter>
                <Menu/>
                {/*<Route path="/create" render={() =>  }/>*/}
                <Route exact path="/" render={()=><Welcome/>}/>
                <Route path="/reg" render={()=><Reg/>}/>
                <Route path="/auth" render={()=><Auth/>}/>
                <Route path="/board" render={()=><Dashboard/>}/>
                <Route path="/task/:id" render={(props) => <TaskView {...props} /> } />
            </BrowserRouter>
    );
}

export default App;
