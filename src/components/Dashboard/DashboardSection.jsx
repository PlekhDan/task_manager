import React from "react";
import {Task} from "./Task";

export class DashboardSection extends React.Component {
    render() {
        return(
            <div className="d-flex">
                <div className="col-3 p-3 px-5 bg-primary badge">
                    <div className="text-center text-white">
                        <h4 className="my-5">TO-DO</h4>
                        <Task/>
                        <Task/>
                        <Task/>
                        <Task/>
                        <Task/>
                    </div>
                </div>
            </div>

        );
    }
}