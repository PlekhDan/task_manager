import React from "react";
import s from "./Task.module.css";
import {Link} from "react-router-dom";
import {ResultContext} from "./Dashboard";
import {host} from "../../config";


// class EditTaskInput extends React.Component {
//     constructor(props) {
//         super(props);
//         // console.log(ResultContext.Provider);
//         this.state = {
//             editTask: ""
//         }
//     }
//
//     handlerInput(event) {
//
//     }
//
//     render() {
//         console.log(this.props);
//         return (
//             <textarea onChange={this.handlerInput}
//                       value={this.props.value}
//                       name="newCategory"
//                       rows="8"
//                       className="form-control mb-4"
//                       placeholder="text"/>
//         );
//     }
// }

// function SubmitEditListener(props) {
//
// }

export class TaskView extends React.Component {

    constructor(props) {
        super(props);
        this.submitDone = this.submitDone.bind(this);
        this.submitTesting = this.submitTesting.bind(this);
        this.submitProgress = this.submitProgress.bind(this);
        this.changeCategory = this.changeCategory.bind(this);
        this.submitRemove = this.submitRemove.bind(this);
        // this.submitEdit = this.submitEdit.bind(this);
        this.updateText = this.updateText.bind(this);
        this.state = {
            id: "",
            title: "",
            text: "",
            date_added: "",
            category: ""
        }
    }

    handlerInput(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    updateText() {
        this.setState({
            text: <div>
                <textarea
                    onChange={this.handlerInput}
                    value={this.state.text}
                    name="text"
                    rows="8"
                    className="form-control mb-4"
                    placeholder="text"/>
                <input type="submit"
                       className="btn btn-outline-primary me-2" value="Отменить"/>
                <input type="submit"
                       className="btn btn-outline-success" value="Сохранить"/>
            </div>

        })
    }

    changeCategory(event, categoryId) {
        event.preventDefault();
        const formData = new FormData;
        formData.append("categoryId", categoryId);
        formData.append("id", this.state.id)
        fetch(host+"/changeCategory", {
            method: "POST",
            body: formData
        }).then(response => response.json())
            .then(result => {
                console.log(result);
            })
    }

    // submitEdit(event) {
    //     event.preventDefault();
    //     console.log("Edit");
    //     this.setState({
    //         edit: <EditTaskInput value={this.state.text}/>
    //     })
    // }

    submitRemove(event) {
        event.preventDefault();
        const formData = new FormData;
        formData.append("id", this.state.id);
        fetch(host+"/removeArticle", {
            method: "POST",
            body: formData
        }).then(response => response.json())
            .then(result => {
                console.log("remove");
            })
    }

    submitProgress(event) {
        const categoryId = ResultContext.Provider.find(item => item.name === "Медицина").id;
        this.changeCategory(event, categoryId);
    }

    submitTesting(event) {
        const categoryId = ResultContext.Provider.find(item => item.name === "Спорт").id;
        this.changeCategory(event, categoryId);
    }

    submitDone(event) {
        const categoryId = ResultContext.Provider.find(item => item.name === "Образование").id;
        this.changeCategory(event, categoryId);
    }

    componentDidMount() {
        const formData = new FormData;
        formData.append("id", this.props.match.params.id);
        fetch(host+"/getIdArticle", {
            method: "POST",
            body: formData
        }).then(response => response.json())
            .then(result => {
                // console.log(result);
                const parser = new DOMParser();
                const html = parser.parseFromString(result.text, "text/html");
                const date = new Date(result.date_added);
                this.setState({
                    id: result.id,
                    title: result.title,
                    text: html.body.innerText,
                    date_added: date.toLocaleDateString(),
                    category: result.category
                })

            })
    }

    render() {
        return (
            <div className="container">
                <div className={s.modal}>
                    <div className="modal-dialog modal-lg modal-dialog-scrollable modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header row m-3">
                                <div className="col-auto mb-3">
                                    <h5 className="modal-title" id="staticBackdropLabel">{this.state.title}</h5>
                                </div>
                                <div className="col-auto mb-3">
                                    <Link to="/dashboard" className="btn-close"/>
                                </div>
                                <div className="navbar navbar-expand-lg navbar-light">
                                    <div className="container-fluid p-0">
                                        <button className="navbar-toggler mb-3" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#navbarText" aria-controls="navbarText"
                                                aria-expanded="false"
                                                aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"/>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarText">
                                            <div className="d-grid gap-2 d-lg-flex">
                                                <input onClick={this.updateText} type="submit"
                                                       className="btn btn-outline-primary" value="Редактировать"/>
                                                {/*<input onClick={this.updateMessage} type="submit"*/}
                                                {/*       className="btn btn-outline-danger" value="Тест"/>*/}
                                                <input onClick={this.submitRemove} type="submit"
                                                       className="btn btn-outline-danger" value="Удалить"/>
                                            </div>
                                            <ul className="navbar-nav me-auto mb-2 mb-lg-0"/>
                                            <div className="d-grid gap-2 d-lg-flex">
                                                <input onClick={this.submitProgress} type="submit"
                                                       className="btn btn-outline-primary text-nowrap"
                                                       value="Начать выполнение"/>
                                                <input onClick={this.submitTesting} type="submit"
                                                       className="btn btn-outline-primary" value="Тестировать"/>
                                                <input onClick={this.submitDone} type="submit"
                                                       className="btn btn-outline-success" value="Выполнено"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-body m-3">
                                <div className="px-5">
                                    <div>{this.state.text}</div>
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