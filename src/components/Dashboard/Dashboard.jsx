import React from "react";
import {DashboardSectionToDo} from "./DashboardSectionToDo";
import {DashboardSectionInProgress} from "./DashboardSectionInProgress";
import s from "./Dashboard.module.css";
import {DashboardSectionTesting} from "./DashboardSectionTesting";
import {DashboardSectionDone} from "./DashboardSectionDone";
import {Task} from "./Task";

function DashboardSection(props) {
    return(
            // <div className="col-lg-3 col-md-6 col-sm-12 mb-3 bg-warning text-center py-5">
            //     <div className="m-1">
            //         <h6>{props.name}</h6>
            //     </div>
            //
            // </div>
            <div className="d-flex flex-column col-lg-3 col-md-6 col-sm-12">
                <div className="border border-primary rounded pb-4 px-4 text-center m-2">
                    <h4 className="py-4">{props.name}</h4>
                    <Task/>
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
                console.log(result);
                this.setState({
                    sections: result.map(section => {
                        return(
                            <DashboardSection
                                key={section.id}
                                id={section.id}
                                name={section.name}
                            />
                        );
                    })
                    // sections: result.forEach((section, index) => {
                    //     console.log(index);
                    //     return(
                    //         <DashboardSection
                    //             key={index+1}
                    //             id={section.id}
                    //             name={section.name}
                    //         />
                    //     );
                    // })

                })

            })
    }

    render() {
        return(
            <div className="container">
                <div className="d-flex flex-wrap">
                    {this.state.sections}
                </div>
            </div>


        );
    }

    // render() {
    //     return(
    //         <div className="d-flex flex-wrap px-5 mb-5">
    //             <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
    //                 <DashboardSectionToDo/>
    //             </div>
    //             <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
    //                 <DashboardSectionInProgress/>
    //             </div>
    //             <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
    //                 <DashboardSectionTesting/>
    //             </div>
    //             <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
    //                 <DashboardSectionDone/>
    //             </div>
    //         </div>
    //     );
    // }
}