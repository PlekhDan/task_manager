import React from "react";
import s from "./Dashboard/Task.module.css";
import {host} from "../config";
import {DashboardSectionInProgress} from "./Dashboard/DashboardSectionInProgress";
import {DashboardSectionDone} from "./Dashboard/DashboardSectionDone";



export class Cabinet extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            lastname: "",
            fname: "",
            flastname: "",
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    handleInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append("value",this.state.name);
        formData.append("item","name");
        fetch(host + "/handlerChangeUserData",{/* тут для изменения данных в БД (пароль не хешируется?)*/
            method: "POST",
            body: formData
        })
            .then(response=>response.json())
            .then(result=>{

            });
    }

    componentDidMount() {
        fetch(host + "/getUser",{/* тут для получения данных о сессии в БД*/
            credentials: 'include'
        })
            .then(response=>response.json())
            .then(result=>{
                if(result.result !== "error"){
                    this.setState({
                        fname: result.name,
                        flastname: result.lastname
                    })
                }
            })
    }


    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 my-5">
                        <div className="row">
                            <div className="col-sm-10 my-5">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="input-group mb-3">
                                        <span  className="input-group-text" id="basic-addon1">{this.state.fname}</span>
                                        <input value={this.state.name} onChange={this.handleInput} type="text" className="form-control" name="name" placeholder="Имя" aria-label="Username" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1">{this.state.flastname}</span>
                                        <input value={this.state.lastname} onChange={this.handleInput} type="text" className="form-control" name="lastname" placeholder="Фамилия" aria-label="Username" aria-describedby="basic-addon1"/>
                                    </div>
                                    <input type="submit" className="btn btn-primary" value="Сохранить изменения"/>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 my-2">
                        <div className="row">
                            <div className="col-sm-12 mb-3" style={{height: '250px', overflow: "auto"}}>
                                <DashboardSectionInProgress/>
                            </div>
                            <div className="col-sm-12 mb-3" style={{height: '250px', overflow: "auto"}}>
                                <DashboardSectionDone/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}