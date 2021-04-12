import React from 'react';
import {Redirect} from "react-router-dom";

export class Reg extends React.Component{
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.sendForm = this.sendForm.bind(this);
        this.state = {
            name:"",
            lastname:"",
            email:"",
            pass:"",
            info:"",
            redirect: false,
            submitBtn: "disabled"
        }
    }

    sendForm(event){
        event.preventDefault();
        const formData = new FormData();
        formData.append("name",this.state.name);
        formData.append("lastname",this.state.lastname);
        formData.append("email",this.state.email);
        formData.append("pass",this.state.pass);
        fetch("http://o90576od.beget.tech/handlerReg",{
            method: "POST",
            body: formData
        }).then(response=>response.json())
            .then(result=> {
                this.setState({
                    redirect: true
                })
            })
    }
    handleInputChange(event){
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
        if (name === "email"){
            if (value === "") {
                this.setState({submitBtn: "disabled"});
                return;
            }
            const formData = new FormData();
            formData.append("email",value);
            fetch("http://o90576od.beget.tech/checkReg",{
                method: "POST",
                body: formData
            }).then(response=>response.json())
                .then(result=>{
                    if(result.result === "exist"){
                        this.setState({
                            info: "Такая почта существует!",
                            submitBtn: "disabled"
                        })
                    }else{
                        this.setState({
                            info: "",
                            submitBtn: ""
                        })
                    }
                });
        }
    }
    render() {
        if(this.state.redirect)
            return <Redirect to="/" />
        else
        return <div className="col-sm-5 my-3 mx-auto">
            <form onSubmit={this.sendForm}>
                <div className="mb-3">
                    <input value={this.state.name} onChange={this.handleInputChange} name="name" type="text" className="form-control" placeholder="Имя"/>
                </div>
                <div className="mb-3">
                    <input value={this.state.lastname} onChange={this.handleInputChange} name="lastname" type="text" className="form-control" placeholder="Фамилия" />
                </div>
                <div className="mb-3">
                    <input value={this.state.email} onChange={this.handleInputChange} name="email" type="email" className="form-control" placeholder="Email"/>
                    <p style={{color:"red"}}>{this.state.info}</p>
                </div>
                <div className="mb-3">
                    <input value={this.state.pass} onChange={this.handleInputChange} name="pass" type="password" className="form-control" placeholder="Пароль"/>
                </div>
                <div className="mb-3">
                    <input type="submit" disabled={this.state.submitBtn} className="form-control btn btn-primary" value="Регистрация"/>
                </div>
            </form>
        </div>
    }
}