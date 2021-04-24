import React from "react";
import {Task} from "./Task";
import {host} from "../../config";
import {Menu} from "../Menu";


export const ResultContext = React.createContext([]);

export function DashboardSection(props) {
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 p-2 text-center h-100">
            <div className="border rounded h-100 overflow-hidden shadow-sm bg-white pb-5">
                <h4 className="mb-3 py-3 rounded shadow-sm">{props.name}</h4>
                <div className="mx-3 overflow-auto" style={{height: "92%"}}>
                    <Task {...props}/>
                </div>
            </div>
        </div>
        // <div className="col-lg-3 col-md-6 col-sm-12 p-2 text-center h-100">
        //     <div className="border rounded w-100 px-3 h-100 overflow-hidden shadow-sm p-3 mb-5 bg-white rounded">
        //         <h4 className="py-4">{props.name}</h4>
        //         <Task {...props}/>
        //     </div>
        // </div>
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
        fetch(host + "/getStatus")
            .then(response => response.json())
            .then(result => {
                ResultContext.Provider = result;
                this.setState({
                    sections: result.map(section => {
                        return (
                            <DashboardSection
                                key={section.id}
                                id={section.id}
                                value={section.value}
                                name={section.name}
                            />
                        );
                    })
                })
                console.log(result);
            })
    }

    render() {
        return (<div>
                <Menu/>
            <div className="container d-flex flex-wrap p-0" style={{height: "75vh"}}>
                {this.state.sections}
            </div>
        </div>

        );
    }
}