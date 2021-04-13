import React from "react";
import {NavLink} from "react-router-dom";
import {BrowserRouter, Route} from "react-router-dom";
import s from "./Dashboard/DashboardSection.module.css"
import { matchPath } from 'react-router-dom';
import { withRouter } from "react-router";

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
        if (false) { // если путь === "/dashboard"
            this.setState({
                create: <NavLink className="btn btn-outline-success me-3 mb-2" to="/create" type="submit">Создать задачу</NavLink>,
            })
        }
        if (false) { // если путь === "/dashboard"
            this.setState({
                cabinet: <NavLink className="btn btn-outline-success me-3 mb-2" to="/cabinet" type="submit">Личный кабинет</NavLink>,
            })
        }
        if (true) { // если путь === "/"  || путь === "/auth"
            this.setState({
                reg: <NavLink className="btn btn-outline-primary me-3 mb-2" to="/reg" type="submit">Регистрация</NavLink>,
            })
        }
        if (true) { // если путь === "/"  || путь === "/reg"
            this.setState({
                auth: <NavLink className="btn btn-outline-primary mb-2" to="auth" type="submit">Войти</NavLink>,
            })
        }
    }
    render() {
        return (
            <div className="container-fluid">
               {/* <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="col-2">
                            <NavLink className="btn btn-outline-success me-3" to="/create" type="submit">Создать задачу</NavLink>
                        </div>
                        <div className="col text-center">
                            <h1>Мега название</h1>
                        </div>
                        <form className="col-2 d-flex justify-content-end">
                            <NavLink className="btn btn-outline-primary me-3" to="/reg"
                                     type="submit">Регистрация</NavLink>
                            <NavLink className="btn btn-outline-primary" to="auth" type="submit">Войти</NavLink>
                        </form>
                    </div>
                </nav>*/}

                <nav className="navbar navbar-expand-md navbar-light bg-light rounded-bottom shadow-lg p-3 mb-5 bg-white rounded">
                    <div className="container">
                        <a className="navbar-brand me-3 mb-2" href="/"><h1>tsk_mngr</h1></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            {this.state.create}
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                            {this.state.reg}
                            {this.state.auth}
                            {this.state.cabinet}
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}