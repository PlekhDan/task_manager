import React from "react";
import s from "./Dashboard.module.css";
import {Task} from "./Task";
import {host} from "../../config";



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
        fetch(host+"/getCategory")
            .then(response => response.json())
            .then(result => {
                this.setState({
                    sections: result.map(section => {
                        return (
                            <DashboardSection
                                key={section.id}
                                id={section.id}
                                name={section.name}
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