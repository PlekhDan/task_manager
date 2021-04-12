import React from "react";
import s from "./Task.module.css"
import {TaskView} from "./TaskView";
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
        fetch("http://p9152834.beget.tech/php/getIdArticle.php", {
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
            <Link to={`/task/${this.props.id}`} className={s.block}>
                <h6>{this.props.title}</h6>
            </Link>
        );
    }
}