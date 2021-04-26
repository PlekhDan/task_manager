import React from "react";
import {Link} from "react-router-dom";
import {host} from "../../config";







export class OneTask extends React.Component {
    constructor(props) {
        super(props);
        this.submitRemove = this.submitRemove.bind(this);
        this.state = {
            resultRemove: ""
        }
    }

    submitRemove() {
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
            return window.location.reload()
        }
        return (
            <Link className="card text-white mb-3" to={`/dashboard/task/${this.props.id}`}>
                <img className="card text-white rounded" src="https://1.cms.s81c.com/sites/default/files/2018-05-01/Connections%20leadspace%202.png" style={{height: "100px"}} alt="..."/>
                <div className="card-img-overlay">
                    <div className="d-flex flex-row-reverse bd-highlight mb-3">
                        <Link onClick={this.submitRemove} className="btn-close"/>
                    </div>
                    <h5 className="card-title position-absolute top-50 start-50 translate-middle">{this.props.title}</h5>
                </div>
            </Link>

        );
    }

}
//зеленый https://www.plastics-foils.ru/upload/iblock/a96/a96d657c9d40985544f31428eea8e6a6.jpg
// фисташковый https://catherineasquithgallery.com/uploads/posts/2021-02/1612595006_4-p-fistashkovii-fon-poluprozrachnii-4.jpg
// синий градиент https://1.cms.s81c.com/sites/default/files/2018-05-01/Connections%20leadspace%202.png

/*<Link className="btn btn-primary bg-gradient mb-3 w-100" to={`/dashboard/task/${props.id}`}
      type="submit">
    <div className="p-3 text-center">
        <h6 className="m-0">{props.title}</h6>
    </div>
</Link>*/

export class Task extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }


    componentDidMount() {
        const formData = new FormData;
        // this.props.id
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