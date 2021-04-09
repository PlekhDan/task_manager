import React from "react";

export class TaskView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop">
                    Launch static backdrop modal
                </button>
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                     tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-scrollable modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header row">
                                <div className="col m-3 pb-3">
                                    <h5 className="modal-title" id="staticBackdropLabel">Заголовок задачи</h5>
                                </div>
                                <div className="col-auto m-3">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                                </div>
                                <div className="row">
                                    <div className="col-auto">
                                        <button type="button" className="btn btn-primary me-2">Редактировать
                                        </button>
                                        <button type="button" className="btn btn-outline-primary">Удалить</button>
                                    </div>
                                    <div className="col d-flex justify-content-end">
                                        <button type="button" className="btn btn-primary me-2">Начать выполнение
                                        </button>
                                        <button type="button"
                                                className="btn btn-outline-primary me-2">Тестировать
                                        </button>
                                        <button type="button" className="btn btn-outline-primary">Выполнено</button>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-body m-3">
                                    <div className="px-5">
                                    <p>Полное описание задачи</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut
                                        consequuntur
                                        eius in itaque magnam nulla officiis, provident quas, repudiandae similique
                                        voluptas
                                        voluptatibus. Deleniti doloribus iste laboriosam nam vel veritatis!
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut
                                        consequuntur
                                        eius in itaque magnam nulla officiis, provident quas, repudiandae similique
                                        voluptas
                                        voluptatibus. Deleniti doloribus iste laboriosam nam vel veritatis!
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut
                                        consequuntur
                                        eius in itaque magnam nulla officiis, provident quas, repudiandae similique
                                        voluptas
                                        voluptatibus. Deleniti doloribus iste laboriosam nam vel veritatis!
                                    </p>
                                    </div>
                            </div>
                            <div className="modal-footer me-3">
                                <p>Создано: </p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}