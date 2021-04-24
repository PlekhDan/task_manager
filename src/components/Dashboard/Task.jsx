import React from "react";
import {Link} from "react-router-dom";
import {host} from "../../config";



function OneTask(props) {
    return (
        <Link className="btn btn-primary mb-3 w-100" to={`/dashboard/task/${props.id}`}
              type="submit">
            <div className="p-3 text-center">
                <h6 className="m-0">{props.title}</h6>
            </div>
        </Link>
    );
}



export class Task extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }

    componentDidMount() {
        const formData = new FormData;
        // this.props.id
        formData.append("id", this.props.id);
            fetch(host+"/getOneStatus", {
            credentials: 'include',
            method: "POST",
            body: formData
        }).then(response => response.json())
            .then(result => {
                this.setState({
                    tasks: result.map(ot => {
                        const parser = new DOMParser();
                        const html = parser.parseFromString(ot.title, "text/html");
                        return (
                            <OneTask
                                key={ot.id}
                                id={ot.id}
                                title={html.body.innerText.slice(0, 13) + " ..."}
                                text={ot.text}
                                date_added={ot.date_added}
                            />
                        );
                    })
                })
            })
    }

    render() {
        return (
            <div className="h-100 overflow-auto">
                <h6>{this.state.tasks}</h6>
            </div>
        );
    }
}