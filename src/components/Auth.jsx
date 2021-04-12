import React from 'react';
import {Dashboard} from "./Dashboard/Dashboard";

export class Auth extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            pass: "",
            info: ""
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    handleInput(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]:value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append("email",this.state.email);
        formData.append("pass",this.state.pass);
        fetch("http://o90576od.beget.tech/handlerAuth",{
            method: "POST",
            body: formData
        })
            .then(response=>response.json())
            .then(result=>{
                if(result.result == "success"){
                    this.setState({
                    })

                }else{
                    this.setState({
                        info: "Такого пользователя не существует"
                    })
                }
            });
    }
    render() {
        return (

                <div className="col-sm-5 my-3 mx-auto">
                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                            <input value={this.state.email} onChange={this.handleInput} name="email" type="text" className="form-control" placeholder="Логин"/>
                            <p style={{color:"red"}}>{this.state.info}</p>
                        </div>
                        <div className="mb-3">
                            <input value={this.state.pass} onChange={this.handleInput} name="pass" type="password" className="form-control" placeholder="Пароль"/>
                        </div>
                        <div className="mb-3">
                            <input type="submit" value="Войти" className="form-control btn btn-primary"/>
                        </div>
                    </form>

            </div>
        )
    }
}
