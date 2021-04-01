import React from 'react'
import PropTypes from 'prop-types'
import ToDoItem from '../ToDoItem/ToDoItem'
import './toDolist.css'


function ToDoList({todos, editTodo}) {
    return (
        <div className="todos-list">
            {todos.map((todo, index) =>{
                return <ToDoItem  todo = {todo} key = {todo.id} index = {index} editTodo = {editTodo}/>
            })}
        </div>
    )
}


ToDoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ToDoList