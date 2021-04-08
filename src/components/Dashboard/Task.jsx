import React from "react";
import s from "./Task.module.css"

export class Task extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            text: "",
            author: "",
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
                    title: result.title
                })
            })
    }

    render() {
        return (
            <div className={s.block}>
                <h6>{this.state.title}</h6>
            </div>
        );
    }
}