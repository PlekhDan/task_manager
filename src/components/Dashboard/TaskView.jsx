import React from "react";

export class TaskView extends React.Component {
    render() {
        return (
            <div className="container">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Launch static backdrop modal
                </button>

                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                            </div>
                            <div className="modal-body">
                                <p>Полное описание задачи</p>
                                <p>Автор</p>
                                <p>Время создания</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary">Редактировать</button>
                                <button type="button" className="btn btn-primary">Удалить</button>
                                <button type="button" className="btn btn-primary">Начать выполнение</button>
                                <button type="button" className="btn btn-primary">Тестирование</button>
                                <button type="button" className="btn btn-primary">Сделано</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}