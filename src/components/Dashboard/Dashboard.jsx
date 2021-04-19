import React from "react";
import {DashboardSectionToDo} from "./DashboardSectionToDo";
import {DashboardSectionInProgress} from "./DashboardSectionInProgress";
import s from "./Dashboard.module.css";
import {DashboardSectionTesting} from "./DashboardSectionTesting";
import {DashboardSectionDone} from "./DashboardSectionDone";
import {Task} from "./Task";


export const ResultContext = React.createContext([]);

function DashboardSection(props) {
    return (
        <div className="d-flex flex-column col-lg-3 col-md-6 col-sm-10 h-100 bg-info">
            <div className="border border-primary rounded pb-2 px-4 text-center m-2 h-100 overflow-auto">
                <h4 className="py-4">{props.name}</h4>
                <Task {...props}/>
            </div>
        </div>
    );
}


export class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sections: []
        }
    }

    componentDidMount() {
        fetch("http://localhost/getCategory")
            .then(response => response.json())
            .then(result => {
                ResultContext.Provider = result;
                console.log(ResultContext);
                this.setState({
                    sections: result.map(section => {
                        return (
                            <DashboardSection
                                key={section.id}
                                id={section.id}
                                name={section.name}
                                arr={result}
                            />
                        );
                    })
                })
            })
    }

    render() {
        return (
            <div className="container" style={{height: "75vh"}}>
                {/*<div className=" h-100">*/}
                    {this.state.sections}
                {/*</div>*/}
            </div>
        );
    }
}