import React from "react";
import s from "./Task.module.css"
import {Link} from "react-router-dom";
import {TaskView} from "./TaskView";

function OneTask(props) {
    // console.log(props.arr.arr);
    return (
        <Link className="d-flex flex-column btn btn-primary mb-3" to={`/dashboard/task/${props.id}`}
              type="submit">
            <div className="p-3 text-center">
                <h6>{props.title}</h6>
            </div>
        </Link>
    );
}

export class Task extends React.Component {

    constructor(props) {
        super(props);
        // console.log(props);
        this.state = {
            tasks: []
        }
    }

    componentDidMount() {
        const formData = new FormData;
        formData.append("id", this.props.id);
        fetch("http://localhost/getOneCategory", {
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
                                arr={this.props}
                                key={ot.id}
                                id={ot.id}
                                title={html.body.innerText.slice(0, 14) + " ..."}
                                text={ot.text}
                                date_added={ot.date_added}
                            />
                        );
                    })
                })
            })
    }

    // componentDidMount() {
    //     const formData = new FormData;
    //     formData.append("id", this.props.id);
    //     fetch("http://p9152834.beget.tech/getIdArticle", {
    //         method: "POST",
    //         body: formData
    //     }).then(response => response.json())
    //         .then(result => {
    //             this.setState({
    //                 id: result.id,
    //                 title: result.title,
    //                 text: result.text,
    //                 date_added: result.date_added
    //             })
    //         })
    // }

    render() {
        return (
            // class={s.block}
            <div className="">
                <h6>{this.state.tasks}</h6>
            </div>
        );
    }
}