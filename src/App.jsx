import { useState } from "react";
import "./App.css";

function App() {
  const [fieldText, setFieldText] = useState("");
  const [toDoList, setToDoList] = useState(["GYM", "Tan", "Laundry"]);

  function handleSubmit(event) {
    event.preventDefault();
    setToDoList([...toDoList, fieldText]);
  }

  return (
    <>
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="toDotInput">Enter Task</label>
        <input
          type="text"
          name="toDoInput"
          id="toDoList"
          value={fieldText}
          onChange={(event) => setFieldText(event.target.value)}
        />
        <button type="submit">Enter</button>
      </form>
      <ol>
        {toDoList.map((element, index, array) => {
          return <li key={index}>{element}</li>;
        })}
      </ol>
    </>
  );
}

export default App;
