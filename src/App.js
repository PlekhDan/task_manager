import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {Menu} from "./components/Menu";
import {Welcome} from "./components/Welcome";
import {Dashboard} from "./components/Dashboard/Dashboard";
import {Reg} from "./components/Reg";
import {TaskView} from "./components/Dashboard/TaskView";
import {Task} from "./components/Dashboard/Task";
import {Auth} from "./components/Auth";
import {Cabinet} from "./components/Cabinet";
import {Create} from "./components/Create";
import {host} from "./config";
import React from "react";


function App() {
    return (
            <BrowserRouter>
                <Menu/>
                <Route path="/create" render={()=><Create/>}/>
                <Route exact path="/" render={()=><Welcome/>}/>
                <Route path="/reg" render={()=><Reg/>}/>
                <Route path="/auth" render={()=><Auth/>}/>
                <Route path="/cabinet" render={()=><Cabinet/>}/>
                <Route path="/dashboard" render={()=><Dashboard/>}/>
                <Route path="/exit" render={()=><Exit/>}/>
                <Route path="/dashboard/task/:id" render={(props) => <TaskView {...props} /> } />
            </BrowserRouter>
    );
}

class Exit extends React.Component {

    componentDidMount() {
        fetch(host + "/destroySession",{
            credentials: 'include'
        })
            .then(response=>response.json())
            .then(result=>{
                console.log(result);
            })
    }
    render() {
        return (
            <Welcome/>
        );
    }
}



export default App;
