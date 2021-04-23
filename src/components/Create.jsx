import React from "react";
import s from "./Create.module.css";
import {Link} from "react-router-dom";
import SunEditor from "suneditor-react";
import 'suneditor/dist/css/suneditor.min.css';
import {host} from "../config";
import {Menu} from "./Menu";

export class Create extends React.Component {

    constructor(props) {
        super(props);
        this.sunEditorRef = React.createRef();
        this.state = {
            title: "",
            text: "",
            date_added: ""
        }
        this.handlerInput = this.handlerInput.bind(this);
        this.handlerSubmit= this.handlerSubmit.bind(this);
    }
    handlerInput(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    handlerSubmit(event){
        event.preventDefault();
        const formData = new FormData();
        formData.append("title",this.state.title);
        formData.append("text",this.state.text);
        fetch(host + "/createTask",{
            method: "POST",
            body: formData
        }).then(response=>response.json())
            .then(result=>console.log(result));
    }

    render() {
        return (
            <div>
                <Menu/>
                <div className="container">
                    <div className={s.modal}>
                        <div className="modal-dialog modal-lg modal-dialog-scrollable modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header row m-1">
                                    <div className="col-auto mb-1">
                                        <h5 className="modal-title">Создание задачи</h5>
                                    </div>
                                    <div className="col-auto mb-1">
                                        <Link to="/dashboard" className="btn-close"/>
                                    </div>
                                </div>
                                <div className="modal-body m-3">
                                    <form onSubmit={this.handlerSubmit}>
                                        <div className="col-auto mb-3">
                                            <input value={this.state.title} onChange={this.handlerInput} name="title" type="text" placeholder="Заголовок" className="form-control"/>
                                        </div>
                                        <div className="col-auto mb-3">
                                            <SunEditor
                                                ref={this.sunEditorRef}
                                                name="text"
                                                onChange={(value)=>{
                                                    const name = (this.sunEditorRef.current.props.name);
                                                    this.setState({
                                                        [name]: value
                                                    })
                                                }}
                                                height="250px"/>
                                        </div>
                                        <div className="mb-3 text-center">
                                            <input type="submit" className="btn btn-primary"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}