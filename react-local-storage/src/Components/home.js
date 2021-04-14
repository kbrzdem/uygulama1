import React, { useState, useEffect} from "react";
import { useLocation } from "react-router-dom";


function Home(props) {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const location = useLocation();
   
    const saveData = (newTodos) => {
      localStorage.setItem("todos", JSON.stringify(newTodos));
    };
  
    useEffect(() => {
      if (localStorage.getItem("todos")) {
        setTodos(JSON.parse(localStorage.getItem("todos")));
      }
    }, []);
  
    const onAddTodo = () => {
      if (newTodo.trim()) {
        const newTodos = [...todos, { todo: newTodo.trim(), id: Date.now() }];
        setTodos(newTodos);
        setNewTodo("");
        saveData(newTodos);
      }
    };
  
    const deleteTodo = (id) => {
      let newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
  
      saveData(newTodos);
    };

    return (
      <div className="container mt-5">
          <h2><img src="https://i.hizliresim.com/2GL30J.png" alt="usericon" width="10%" />Welcome,
                    <span>
                      {location.state.name} {location.state.surname}
                    </span>
                </h2>
        <h2 className="text-center">Todo</h2>
  
        <table className="table table-dark mt-5">
          <thead>
            <tr>
              <th>
                <input
                  type="text"
                  id="todoInput"
                  className="form-control"
                  placeholder="add todo"
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                />
              </th>
              <th>
                <button className="btn btn-primary btn-block" onClick={onAddTodo}>
                  {" "}
                  Add
                </button>
              </th>
            </tr>
          </thead>
  
          <thead>
            <tr>
              <th scope="col" colSpan="2">
                Task
              </th>
              <th scope="col"></th>
            </tr>
          </thead>
  
          <tbody id="table">
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.todo}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    {" "}
                    Delete{" "}
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default Home;