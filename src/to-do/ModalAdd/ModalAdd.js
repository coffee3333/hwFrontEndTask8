import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import './modalAdd.css'

function ModalAdd ({ onCreate }){
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState('');
    const [desc, setDesc] = React.useState('');


    function submitHandler (state, value, desc, event){
      event.preventDefault()
      setOpen(state);

      if (value.trim() && desc.trim()){
          onCreate(value, desc);
          setValue('');
      }
    }

    function cancelHandler (state) {
      setOpen(state);
      setValue('');
    }

    return (
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <button className="nav-bar__add"/>
        }
      >
        <Modal.Header>Add Task</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <form id='1' onSubmit = {event => submitHandler(false, value, desc, event)} className = "modal__add-form">
                <label className = "modal__label-title">Title:</label>
                <input value = {value} onChange = {event => setValue(event.target.value)} required/>
                <label className = "modal__label-desc" >Description:</label>
                <textarea desc = {desc} rows="4" cols="50" onChange = {event => setDesc(event.target.value)} required></textarea>
            </form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={() => cancelHandler(false)}>
            Close
          </Button>
          <Button
            form='1'
            content="Add"
            labelPosition='right'
            icon='checkmark'
            type='submit'
            positive
          />
        </Modal.Actions>
      </Modal>
    )
}

ModalAdd.prototype = {
    onCreate: PropTypes.func.isRequired
}
  
export default ModalAdd