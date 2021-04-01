import React, {useState} from 'react'
import { Button, Modal } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import './modalEdit.css'



function ModalEdit ({ todo, editTodo }){
    const [open, setOpen] = useState(false);
    const [todoData, setTodoData] = useState({...todo });


    function inputHandler (event){
        const {value, name} = event.target
        setTodoData(prev => ({...prev,[name]:value}));
    }

    async function submitHandler (state, title, desc, event){
        event.preventDefault()
        editTodo(todo.id, title, desc);
        await setOpen(state);
    }

    function cancelHandler (state) {
        setOpen(state);
    }

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={
            <button className="todos__edit-btn" />
            }
        >
        <Modal.Header>Edit Task</Modal.Header>
        <Modal.Content>
            <Modal.Description>
                <form id="2" onSubmit = {event => submitHandler(false, todoData.title, todoData.desc, event)} className = "modal__edit-form">
                    <label className = "modal__label-title">Title:</label>
                    <input name='title' required defaultValue = {todo.title} onChange = {event => inputHandler(event)}/>
                    <label className = "modal__label-desc" >Description:</label>
                    <textarea name= 'desc' required defaultValue = {todo.desc} rows="4" cols="50" onChange = {event => inputHandler(event)} ></textarea>
                </form>
            </Modal.Description>
        </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={() => cancelHandler(false)}>
                    Close
                </Button>
                <Button
                    form="2"
                    content="Edit"
                    labelPosition='right'
                    icon='checkmark'
                    positive
                    type='submit'
                />
            </Modal.Actions>
        </Modal>
    )
}

ModalEdit.prototype = {
    onCreate: PropTypes.func.isRequired
}
  
export default ModalEdit