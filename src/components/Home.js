import React, { useState, useEffect } from "react";
import "../components/style/Todo.css";

const Home = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  // Load todos from localStorage on component mount
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Update localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    if (editId !== null) {
      setTodos(
        todos.map((item) =>
          item.id === editId ? { ...item, text: todo } : item
        )
      );
      setEditId(null);
    } else {
      const newTodo = {
        id: Date.now(), // unique id based on timestamp
        text: todo,
        isCompleted: false,
      };
      setTodos([...todos, newTodo]);
    }
    setTodo('');
  };

  const handleEdit = (id, text) => {
    setEditId(id);
    setTodo(text);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  return (
    <div className="screen">
      <div className="container">
        <div className="app">
          <h1>Todo App</h1>
        </div>
        <div className="input">
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            className="todo-input"
            placeholder="Add a new task"
          />
          <button onClick={handleAdd} className="add-button">
            {editId !== null ? 'Update Todo' : 'Add Todo'}
          </button>
        </div>
        <div className="todos">
          {todos.map((item) => (
            <div key={item.id} className="todo-item">
              <div
                className={`todo-text ${item.isCompleted ? 'completed' : ''}`}
                onClick={() => toggleComplete(item.id)}
              >
                {item.text}
              </div>
              <div className="todo-actions">
                <button
                  onClick={() => handleEdit(item.id, item.text)}
                  className="edit-button"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;














// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../components/style/Todo.css";

// const Home = () => {
//   const [todo, setTodo] = useState('');
//   const [todos, setTodos] = useState([]);
//   const [editId, setEditId] = useState(null);
//   const [editText, setEditText] = useState('');

//   const API_URL = process.env.REACT_APP_API_URL;

//   useEffect(() => {
//     const fetchTodos = async () => {
//       try {
//         // const response = await axios.get('http://localhost:8000/api/v4/todos');
//         const response = await axios.get(`${API_URL}/api/v4/todos`);
//         setTodos(response.data);
//       } catch (err) {
//         console.error("Error fetching todos:", err);
//       }
//     };
//     fetchTodos();
//   }, [API_URL]);

//   const handleAdd = async () => {
//     if (editId !== null) {
//       try {
//         // const response = await axios.put(`http://localhost:8000/api/v4/todos/${editId}`, { text: editText });
//         const response = await axios.put(`${API_URL}/api/v4/todos/${editId}`, { text: editText });
//         setTodos(
//           todos.map((item) =>
//             item._id === editId ? { ...item, text: response.data.text } : item
//           )
//         );
//         setEditId(null);
//         setEditText('');
//       } catch (err) {
//         console.error("Error updating todo:", err);
//       }
//     } else {
//       try {
//         // const response = await axios.post('http://localhost:8000/api/v4/todos', { text: todo });
//         const response = await axios.post(`${API_URL}/api/v4/todos`, { text: todo });
//         setTodos([...todos, response.data]);
//       } catch (err) {
//         console.error("Error adding todo:", err);
//       }
//     }
//     setTodo('');
//   };

//   const handleEdit = (id, text) => {
//     setEditId(id);
//     setEditText(text);
//     setTodo(text);
//   };

//   const handleDelete = async (id) => {
//     try {
//       // const response = await axios.delete(`http://localhost:8000/api/v4/todos/${id}`);
//       const response = await axios.delete(`${API_URL}/api/v4/todos/${id}`);
//       if (response.status === 200) {
//         setTodos(todos.filter((item) => item._id !== id));
//       } else {
//         console.error("Failed to delete the todo");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const handleChange = (e) => {
//     setTodo(e.target.value);
//     if (editId !== null) {
//       setEditText(e.target.value);
//     }
//   };

//   const toggleComplete = async (id) => {
//     try {
//       // const response = await axios.patch(`http://localhost:8000/api/v4/todos/${id}/toggleComplete`);
//       const response = await axios.patch(`${API_URL}/api/v4/todos/${id}/toggleComplete`);
//       setTodos(
//         todos.map((item) =>
//           item._id === id ? { ...item, isCompleted: response.data.isCompleted } : item
//         )
//       );
//     } catch (error) {
//       console.error("Error toggling completion:", error);
//     }
//   };

//   return (
//     <div className="screen">
//       <div className="container">
//         <div className="app">
//           <h1>Todo App</h1>
//         </div>
//         <div className="input">
//           <input
//             onChange={handleChange}
//             value={todo}
//             type="text"
//             className="todo-input"
//             placeholder="Add a new task"
//           />
//           <button onClick={handleAdd} className="add-button">
//             {editId !== null ? 'Update Todo' : 'Add Todo'}
//           </button>
//         </div>
//         <div className="todos">
//           {todos.map((item) => (
//             <div key={item._id} className="todo-item">
//               <div
//                 className={`todo-text ${item.isCompleted ? 'completed' : ''}`}
//                 onClick={() => toggleComplete(item._id)}
//               >
//                 {item.text}
//               </div>
//               <div className="todo-actions">
//                 <button
//                   onClick={() => handleEdit(item._id, item.text)}
//                   className="edit-button"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(item._id)}
//                   className="delete-button"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;



















// import React, { useState } from "react";
// import "../components/style/Todo.css";

// const Home = () => {
//   const [Todo, setTodo] = useState('');
//   const [Todos, setTodos] = useState([]);
//   const [editId, setEditId] = useState(null);
//   const [editText, setEditText] = useState('');

//   const handleAdd = () => {
//     if (editId !== null) {
//       setTodos(
//         Todos.map((item) =>
//           item.id === editId ? { ...item, Todo: editText } : item
//         )
//       );
//       setEditId(null);
//       setEditText('');
//     } else {
//       setTodos([...Todos, { id: Date.now(), Todo, isCompleted: false }]);
//     }
//     setTodo('');
//   };

//   const handleEdit = (id, text) => {
//     setEditId(id);
//     setEditText(text);
//     setTodo(text);
//   };

//   const handleDelete = (id) => {
//     setTodos(Todos.filter((item) => item.id !== id));
//   };

//     const handleChange = (e) => {
//     setTodo(e.target.value);
//     if (editId !== null) {
//       setEditText(e.target.value);
//     }
//   };

//   const toggleComplete = (id) => {
//     setTodos(
//       Todos.map((item) =>
//         item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
//       )
//     );
//   };

//   console.log(Todos);

// return (
//   <div className="screen">
//     <div className="container">
//       <div className="app">
//         <h1>Todo App</h1>
//       </div>
//       <div className="input">
//         <input
//           onChange={handleChange}
//           value={Todo}
//           type="text"
//           className="todo-input"
//           placeholder="Add a new task"
//         />
//         <button onClick={handleAdd} className="add-button">
//           {editId !== null ? 'Update Todo' : 'Add Todo'}
//         </button>
//       </div>
//       <div className="todos">
//         {Todos.map((item) => (
//           <div key={item.id} className="todo-item">
//             <div
//               className={`todo-text ${item.isCompleted ? 'completed' : ''}`}
//               onClick={() => toggleComplete(item.id)}
//             >
//               {item.Todo}
//             </div>
//             <div className="todo-actions">
//               <button
//                 onClick={() => handleEdit(item.id, item.Todo)}
//                 className="edit-button"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(item.id)}
//                 className="delete-button"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// );
// };

// export default Home;
