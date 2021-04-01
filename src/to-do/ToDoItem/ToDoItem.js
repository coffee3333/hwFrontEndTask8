import React, {useContext} from 'react'
import './toDoItem.css'
import PropTypes  from 'prop-types'
import Context from '../../context'
import ModalEdit from '../ModalEdit/ModalEdit'



function ToDoItem({ todo, index, editTodo }) {
    const {removeToDo} = useContext(Context)

    return (
        <div className="todos__task">
            <h3 className="todos__task-title">{todo.title}</h3>
            <p className="todos__task-description">{todo.desc}</p>
            <div className="todos__footer">
                <p className = "todos__date">{todo.date}</p>
                <ModalEdit todo = {todo} editTodo = {editTodo} />
                <button className="todos__close-btn" onClick = {() => removeToDo(todo.id)}/>
            </div>
        </div>	
    )
}

ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number
}


export default ToDoItem