import React from "react";
import {Link} from "react-router-dom";
import {host} from "../../config";
import {Redirect} from "react-router";


// #f0f3f0 светло-бежевый
// #beb6a0 темно-бежевый


export class OneTask extends React.Component {
    constructor(props) {
        super(props);
        this.submitRemove = this.submitRemove.bind(this);
        this.state = {
            resultRemove: ""
        }
    }

    submitRemove(event) {
        event.preventDefault();
        const formData = new FormData;
        formData.append("id", this.props.id);
        fetch(host+"/removeTask", {
            method: "POST",
            body: formData
        }).then(response => response.json())
            .then(result => {
                if (result.result === "success") {
                    this.setState({
                        resultRemove: "success"
                    })
                }
            })
    }

    render() {
        if(this.state.resultRemove === "success"){
            return <Redirect to="/dashboard"/>;
        }
        return (
            // <Link className="card text-white mb-3" to={`/dashboard/task/${this.props.id}`}>
            //     {/*<img className="card text-white rounded" src="https://1.cms.s81c.com/sites/default/files/2018-05-01/Connections%20leadspace%202.png" style={{height: "100px"}} alt="..."/>*/}
            //     <div className="card text-dark mb-3" style={{height: "100px", background: "linear-gradient(135deg,#f0f3f0,#beb6a0)"}} to={`/dashboard/task/${this.props.id}`}/>
            //     <div className="card-img-overlay">
            //         <div className="d-flex flex-row-reverse bd-highlight mb-3">
            //             <button onClick={this.submitRemove} className="btn-close" title="Удалить задачу"/>
            //         </div>
            //         <h5 className="card-title position-absolute top-50 start-50 translate-middle">{this.props.title}</h5>
            //     </div>
            // </Link>

            <Link className="card text-dark mb-3" style={{height: "100px", background: "linear-gradient(135deg,#f0f3f0,#beb6a0)"}} to={`/dashboard/task/${this.props.id}`}>
                    <div className="d-flex flex-row-reverse p-2">
                        <button onClick={this.submitRemove} className="btn-close btn-close-white" title="Удалить задачу"/>
                    </div>
                    <h6 className="card-title position-absolute top-50 start-50 translate-middle m-0">{this.props.title}</h6>
            </Link>

        );
    }
}


export class Task extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }

    componentDidMount() {
        const formData = new FormData;
        formData.append("id", this.props.id);
            fetch(host+"/getOneStatus", {
            credentials: 'include',
            method: "POST",
            body: formData
        }).then(response => response.json())
            .then(result => {
                this.setState({
                    tasks: result.map(ot => {
                        const parser = new DOMParser();
                        const html = parser.parseFromString(ot.title, "text/html");
                        return (
                            <OneTask
                                key={ot.id}
                                id={ot.id}
                                title={html.body.innerText.slice(0, 20)}
                                text={ot.text}
                                date_added={ot.date_added}
                            />
                        );
                    })
                })
            })

    }

    render() {
        return (
            <div className="h-100 overflow-auto">
                <h6>{this.state.tasks}</h6>
            </div>
        );
    }
}