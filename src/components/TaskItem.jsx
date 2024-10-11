import PropTypes from "prop-types";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

const TaskItem = ({ task, toggleTaskCompletion, deleteTask, editTask }) => {
  return (
    <div className="data-entry-area">
      <div className="data-item">
     
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)}
          />
          <p
            className="data-entry"
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.todo}
          </p>
  
      </div>

      <div className="data-entry-buttons">
        <button onClick={() => editTask(task.id)} style={{ background: "none", border: "none" }}>
          <FaRegEdit className="edit-icon" />
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          style={{ background: "none", border: "none" }}
        >
          <FaTrashAlt className="trash-icon" />
        </button>
      </div>
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    todo: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleTaskCompletion: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
};

export default TaskItem;
