import {host} from "../config";
import {Menu} from "./Menu";
import React from "react";
import s from "./Welcome.module.css";

export class Exit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: ""
        }
    }
    componentDidMount() {

        fetch(host + "/destroySession",{
            credentials: 'include'
        })
            .then(response=>response.json())
            .then(result=>{
                if(result.result == "success"){
                    this.setState({
                        menu: <Menu/>
                    })
                }

            })
    }
    render() {
        return ( <div>
                {this.state.menu}
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className={s.blockModule}>
                                    <div className={s.bord}>
                                        <h1 className={s.text}>Возвращайтесь!</h1>
                                    </div>
                                    <div className={s.img}/>
                                    {/*<img src="https://www.mota.ru/upload/resize/2560/1600/upload/wallpapers/source/2014/04/16/20/01/39936/hytT7JJUHd-ca5.jpg" className="d-block w-100" alt="..."/>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


        );
    }
}
