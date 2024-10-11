import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { IoMdAddCircle } from "react-icons/io";

const TaskInput = ({ setTasks, editingTask, setEditingTask }) => {
  const [inputText, setInputText] = useState(editingTask ? editingTask.todo : "");

  // Update inputText when editingTask changes
  useEffect(() => {
    if (editingTask) {
      setInputText(editingTask.todo);
    } else {
      setInputText("");
    }
  }, [editingTask]);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const saveTask = (e) => {
    e.preventDefault();
    if (inputText.trim() === "") return;

    if (editingTask) {
      // Edit the task in place
      setTasks((prev) =>
        prev.map((task) =>
          task.id === editingTask.id ? { ...task, todo: inputText } : task
        )
      );
      setEditingTask(null); // Clear editing mode
    } else {
      // Add new task
      setTasks((prev) => [
        ...prev,
        { id: nanoid(), todo: inputText, completed: false },
      ]);
    }
    setInputText(""); // Reset input after saving
  };

  return (
    <form className="form-area">
      <input
        placeholder="Enter task here"
        type="text"
        onChange={handleChange}
        value={inputText || ""}
      />
      <button onClick={saveTask} style={{ background: "none", border: "none" }}>
        <IoMdAddCircle className="add-icon" />
      </button>
    </form>
  );
};

TaskInput.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      todo: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  setTasks: PropTypes.func.isRequired,
  editingTask: PropTypes.shape({
    id: PropTypes.string,
    todo: PropTypes.string,
    completed: PropTypes.bool,
  }),
  setEditingTask: PropTypes.func.isRequired,
};

export default TaskInput;
