import React from 'react';
import TodoList from './components/list-component';
import AddTodo from './components/add-todo-component'
import ListSubComponent from './components/list-sub-component'

function App() {
  return (
    <div className="App">
    <AddTodo></AddTodo>
     <TodoList>
     
     </TodoList>
     <ListSubComponent>
     </ListSubComponent>
    
    </div>
  );
}

export default App;
