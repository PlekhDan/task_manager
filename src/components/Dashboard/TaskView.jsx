import React from "react";
import s from "./Task.module.css";
import {Link} from "react-router-dom";

export class TaskView extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            id: "",
            title: "",
            text: "",
            date_added: ""
        }
    }

    componentDidMount() {
        const formData = new FormData;
        formData.append("id", this.props.match.params.id);
        fetch("http://p9152834.beget.tech/php/getIdArticle.php", {
            method: "POST",
            body: formData
        }).then(response => response.json())
            .then(result => {
                this.setState( {
                    id: result.id,
                    title: result.title,
                    text: result.text,
                    date_added: result.date_added
                })

            })
    }

    render() {
        return (
            <div className="container">
                <div className={s.modal}>
                    <div className="modal-dialog modal-lg modal-dialog-scrollable modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header row">
                                <div className="col m-3 pb-3">
                                    <h5 className="modal-title" id="staticBackdropLabel">{this.state.title}</h5>
                                </div>
                                <div className="col-auto m-3">
                                    <Link to="/" className="btn-close"/>
                                </div>
                                <div className="row">
                                    <div className="col-auto">
                                        <button type="button" className="btn btn-primary me-2">Редактировать
                                        </button>
                                        <button type="button" className="btn btn-outline-primary">Удалить</button>
                                    </div>
                                    <div className="col d-flex justify-content-end">
                                        <button type="button" className="btn btn-primary me-2">Начать выполнение
                                        </button>
                                        <button type="button"
                                                className="btn btn-outline-primary me-2">Тестировать
                                        </button>
                                        <button type="button" className="btn btn-outline-primary">Выполнено</button>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-body m-3">
                                    <div className="px-5">
                                        <p>{this.state.text}</p>
                                    </div>
                            </div>
                            <div className="modal-footer me-3">
                                <p>Создано: {this.state.date_added}</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}