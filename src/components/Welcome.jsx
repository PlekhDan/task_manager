import React from "react";
import s from "./Welcome.module.css";
import {Menu} from "./Menu";

export class Welcome extends React.Component {
    render() {
        return(
            <div>
                <Menu />
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className={s.blockModule}>
                                <div className={s.bord}>
                                    <h1 className={s.text}>Добро пожаловать!</h1>
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