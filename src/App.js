import React from 'react'
import addButton from './assets/img/plus.svg';
import ToDoList from './to-do/ToDoList/ToDoList';




function App() {





  return (
    <div className='main-div'>
      <div className="nav-bar">
        <h3 className="nav-bar__title">Docket</h3>
        <button className="nav-bar__add"><img src={addButton} alt="" /></button>
      </div>
      <div className="todos-wrapper">
        <input className="todos__search-field" placeholder = "Search..."/>
			  <h1 className="todos__main-title">Notes</h1>
        <ToDoList />
      </div>
    </div>

  );
}

export default App;
