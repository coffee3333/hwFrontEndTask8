import React from 'react'
import ToDoList from './to-do/ToDoList/ToDoList';
import Context from './context'
import ModalAdd from './to-do/ModalAdd/ModalAdd'


function App() {

  const [todos, setTodos] = React.useState([
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet.',
      desc: "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora et assumenda in, laboriosam eum fuga enim sit, minima nihil voluptate.",
      date: "21.02.1998"
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet.',
      desc: "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora et assumenda in, laboriosam eum fuga enim sit, minima nihil voluptate.",
      date: "21.02.1998"
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor sit amet.',
      desc: "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora et assumenda in, laboriosam eum fuga enim sit, minima nihil voluptate.",
      date: "21.02.1998"
    }
  ])


  function removeToDo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function editTodo(id, title, desc){
    setTodos(todos.map(todo => todo.id === id ? Object.assign({}, todo, 
      {
        id,
        title,
        desc,
        date: new Date(Date.now()).toLocaleDateString()
      }): todo))
  }

  function addToDo (title, desc){
    setTodos(todos.concat([
      {
        id: Date.now(),
        title,
        desc,
        date: new Date(Date.now()).toLocaleDateString()
      }
    ]))
  }

  return (
    <Context.Provider value = {{ removeToDo, editTodo }}>
      <div className='main-div'>
        <div className="nav-bar">
          <h3 className="nav-bar__title">Docket</h3>
          <ModalAdd onCreate ={addToDo}/>
        </div>
        <div className="todos-wrapper">
          <input className="todos__search-field" placeholder = "Search..."/>
          <h1 className="todos__main-title">Notes</h1>
          {todos.length ? <ToDoList todos = {todos} editTodo= {editTodo} /> : <p className = "todos__empty-title">Empty</p>}
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;