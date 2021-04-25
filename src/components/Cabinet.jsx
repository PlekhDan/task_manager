import React from "react";
import {host} from "../config";
import {Redirect} from "react-router-dom";
import {CabinetTask} from "./CabinetTask";
import {Menu} from "./Menu";




export class Cabinet extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            lastname: "",
            fname: "",
            flastname: "",
            result: "",
            redirect: false
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
        formData.append("name",this.state.name);
        formData.append("lastname",this.state.lastname);
        fetch(host + "/handlerChangeUserData",{
            method: "POST",
            body: formData,
            credentials: 'include'
        })
            .then(response=>response.json())
            .then(result=>{
                if(result.result === "success"){
                    this.setState({
                        redirect: true
                    })
                }


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
        if (this.state.redirect === true)
            return <Cabinet/>;
        else
            return(
                <div>
                    <Menu/>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 my-5">
                                <p className="fs-1 text-start">Личные данные</p>
                                <div className="row">
                                    <div className="col-sm-10 my-2">
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="input-group mb-3">
                                                <span  className="input-group-text" id="basic-addon1">{this.state.fname}</span>
                                                <input value={this.state.name} onChange={this.handleInput} type="text" className="form-control" name="name" placeholder="Имя"  aria-label="Username" aria-describedby="basic-addon1"/>
                                            </div>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1">{this.state.flastname}</span>
                                                <input value={this.state.lastname} onChange={this.handleInput} type="text" className="form-control" name="lastname" placeholder="Фамилия" aria-label="Username" aria-describedby="basic-addon1"/>
                                            </div>
                                            <input disabled={!this.state.lastname || !this.state.name} type="submit" className="btn btn-primary" value="Сохранить изменения"/>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6" style={{height: "80vh"}}>
                                <CabinetTask/>
                            </div>
                        </div>
                    </div>
                </div>

            )
    }
}