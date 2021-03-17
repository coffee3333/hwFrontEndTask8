import React from 'react'
import ToDoItem from '../ToDoItem/ToDoItem'
import './toDolist.css'


export default function ToDoList() {
    return (
        <div className="todos-list">
            <ToDoItem />
        </div>
    )
}