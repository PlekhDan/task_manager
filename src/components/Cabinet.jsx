import React from "react";
import s from "./Dashboard/Task.module.css";




export class Cabinet extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            lastname: "",
            pass: "",
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
        formData.append("pass",this.state.pass);
        fetch("http://o90576od.beget.tech/handlerReg",{/* тут для изменения данных в БД*/
            method: "POST",
            body: formData
        })
            .then(response=>response.json())
            .then(result=>{

            });
    }

    componentDidMount() {
        fetch("http://ku4keee.beget.tech/php/getUser.php",{/* тут для получения данных о сессии в БД*/
            credentials: 'include'
        })
            .then(response=>response.json())
            .then(result=>{
                if(result.result !== "error"){
                    this.setState({
                        name: result.name,
                        email: result.email
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
                                        <span  className="input-group-text" id="basic-addon1">{this.state.name}</span>
                                        <input value={this.state.name} onChange={this.handleInput} type="text" className="form-control" name="name" placeholder="Имя" aria-label="Username" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1">{this.state.email}</span>
                                        <input value={this.state.lastname} onChange={this.handleInput} type="text" className="form-control" name="lastname" placeholder="Фамилия" aria-label="Username" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1">Пароль</span>
                                        <input value={this.state.pass} onChange={this.handleInput} type="password" name="password" className="form-control" placeholder="Пароль" aria-label="Username" aria-describedby="basic-addon1"/>
                                    </div>
                                    <input type="submit" className="btn btn-primary" value="Сохранить изменения"/>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 my-2">
                        <div className="row">
                            <div className="col-sm-12" className={s.block}>
                                <h2 className="text-center">Задачи в разработке,Задачи в разработке,Задачи в разработке,Задачи в разработке
                                    Задачи в разработке,Задачи в разработке,Задачи в разработке,Задачи в разработке</h2>
                            </div>
                            <div className="col-sm-12" className={s.block}>
                                <h2 className="text-center">Сделанные задачи,Сделанные задачи,Сделанные задачи,Сделанные задачи
                                    Сделанные задачи,Сделанные задачи,Сделанные задачи,Сделанные задачи</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}