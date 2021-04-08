import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Dashboard/DashboardSection.module.css"

export class Menu extends React.Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="col-2">
                            {/*<NavLink className="btn btn-outline-success me-3" to="/create" type="submit">Создать задачу</NavLink>*/}
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
                </nav>
            </div>
        );
    }
}