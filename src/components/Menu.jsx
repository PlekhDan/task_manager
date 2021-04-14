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
        if (false) { // если путь === "/dashboard"
            this.setState({
                create: <NavLink className="btn btn-outline-success me-3 mb-2" to="/create" type="submit">Создать
                    задачу</NavLink>,
            })
        }
        if (false) { // если путь === "/dashboard"
            this.setState({
                cabinet: <NavLink className="btn btn-outline-success me-3 mb-2" to="/cabinet" type="submit">Личный
                    кабинет</NavLink>,
            })
        }
        if (true) { // если путь === "/"  || путь === "/auth"
            this.setState({
                reg: <NavLink className="btn btn-outline-primary me-3 my-2" to="/reg" type="submit">Регистрация</NavLink>,
            })
        }
        if (true) { // если путь === "/"  || путь === "/reg"
            this.setState({
                auth: <NavLink className="btn btn-outline-primary me-3 my-2" to="auth" type="submit">Войти</NavLink>,
            })
        }
        if (true) { // если путь === "/"  || путь === "/create"
            this.setState({
                create: <NavLink className="btn btn-outline-success me-3 my-2" to="/create" type="submit">Создать задачу</NavLink>,
            })
        }
    }

    render() {
        return (
            <div className="mb-5">

                {/*<nav className="navbar navbar-expand-md navbar-light bg-light rounded-bottom shadow-lg p-3 mb-5 bg-white rounded">*/}
                {/*    <div className="container">*/}
                {/*        <a className="navbar-brand me-3 mb-2" href="/"><h1>tsk_mngr</h1></a>*/}
                {/*        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"*/}
                {/*                data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false"*/}
                {/*                aria-label="Toggle navigation">*/}
                {/*            <span className="navbar-toggler-icon"></span>*/}
                {/*        </button>*/}
                {/*        <div className="collapse navbar-collapse" id="navbarText">*/}
                {/*            {this.state.create}*/}
                {/*            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>*/}
                {/*            {this.state.reg}*/}
                {/*            {this.state.auth}*/}
                {/*            {this.state.cabinet}*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</nav>*/}

                <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
                    <div className="container">
                        <NavLink className="navbar-brand" to="/">
                            <h1>tsk_mngr</h1>
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className=" collapse navbar-collapse py-3" id="navbarSupportedContent">
                            <div className="me-auto"/>
                                <div className="d-grid gap-2 d-md-flex">
                                    {this.state.reg}
                                    {this.state.auth}
                                    {/*{this.state.cabinet}*/}
                                    {/*{this.state.create}*/}
                                </div>
                        </div>
                    </div>
                </nav>

            </div>
        );
    }
}