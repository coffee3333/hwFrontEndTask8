import React from 'react'
import './toDoItem.css'

export default function ToDoItem() {
    return (
        <div className="todos__task">
            <h3 className="todos__task-title">Lorem ipsum dolor sit amet.</h3>
            <p className="todos__task-description">1Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora et assumenda in, laboriosam eum fuga enim sit, minima nihil voluptate.</p>
            <div className="todos__footer">
                <p className = "todos__date">23.02.2021</p>
                <a className="todos__edit-btn"></a>
                <a className="todos__close-btn"></a>
            </div>
        </div>	
    )
}