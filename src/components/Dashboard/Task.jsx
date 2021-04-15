import React from "react";
import s from "./Task.module.css"
import {Link} from "react-router-dom";

export class Task extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            title: "",
            text: "",
            date_added: ""
        }
    }

    componentDidMount() {
        const formData = new FormData;
        formData.append("id", this.props.id);
        fetch("http://p9152834.beget.tech/getIdArticle", {
            method: "POST",
            body: formData
        }).then(response => response.json())
            .then(result => {
                this.setState({
                    id: result.id,
                    title: result.title,
                    text: result.text,
                    date_added: result.date_added
                })
            })
    }

    render() {
        return (
            // class={s.block}
            <Link className="d-flex flex-column btn btn-primary my-3" to={`/dashboard/task/${this.props.id}`} type="submit">
                <div className="p-3 text-center">
                    <h6>{this.props.title}</h6>
                </div>
            </Link>
        );
    }
}