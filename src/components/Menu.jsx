import React from "react";
import {NavLink} from "react-router-dom";
import {BrowserRouter, Route} from "react-router-dom";
import s from "./Dashboard/DashboardSection.module.css"
import {matchPath} from 'react-router-dom';
import {withRouter} from "react-router";

export class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            create: "",
            cabinet: "",
            reg: "",
            auth: ""
        }
    }

    componentDidMount() {
        if (true) { // если путь === "/dashboard"
            this.setState({
                create: <NavLink className="btn btn-outline-success text-nowrap" to="/create" type="submit">Создать
                    задачу</NavLink>,
            })
        }
        if (true) { // если путь === "/dashboard"
            this.setState({
                cabinet: <NavLink className="btn btn-outline-success text-nowrap" to="/cabinet" type="submit">Личный
                    кабинет</NavLink>,
            })
        }
        if (true) { // если путь === "/"  || путь === "/auth"
            this.setState({
                reg: <NavLink className="btn btn-outline-primary" to="/reg"
                              type="submit">Регистрация</NavLink>,
            })
        }
        if (true) { // если путь === "/"  || путь === "/reg"
            this.setState({
                auth: <NavLink className="btn btn-outline-primary" to="/auth" type="submit">Войти</NavLink>,
            })
        }
    }

    render() {
        return (
            <div className="mb-5">
                <nav className="navbar navbar-expand-md navbar-light bg-light rounded-bottom shadow p-3 mb-5 bg-white rounded">
                    <div className="container">
                        <a className="navbar-brand me-3 mb-2" href="/"><h1>tsk_mngr</h1></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <div className="d-grid gap-2 d-md-flex">
                                {this.state.create}
                            </div>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0"/>
                            <div className="d-grid gap-2 d-md-flex">
                                {this.state.reg}
                                {this.state.auth}
                                {this.state.cabinet}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}