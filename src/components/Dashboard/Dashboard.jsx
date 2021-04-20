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
        <div className="col-lg-3 col-md-6 col-sm-12 p-2 text-center h-100">
            <div className="border border-primary rounded w-100 px-3 h-100 overflow-hidden">
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
            <div className="container d-flex flex-wrap p-0" style={{height: "75vh"}}>
                {this.state.sections}
            </div>
        );
    }
}