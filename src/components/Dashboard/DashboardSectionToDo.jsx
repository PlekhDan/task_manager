import React from "react";
import {Task} from "./Task";
import s from "./DashboardSection.module.css";

export class DashboardSectionToDo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }

    componentDidMount() {
        fetch("http://p9152834.beget.tech/php/getArticles.php")
            .then(response => response.json())
            .then(result => {
                this.setState({
                    tasks: result.map(task => {
                        return (<Task
                            key={task.id}
                            id={task.id}
                            title={task.title}
                        />);
                    })
                })
            })
    }

    render() {
        return (
            <div className="border border-primary rounded mx-2 pb-4 px-4 text-center">
                <h4 className="py-4">TO-DO</h4>
                {this.state.tasks}
            </div>
        );
    }
}