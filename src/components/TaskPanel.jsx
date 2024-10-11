import PropTypes from "prop-types";

const TaskPanel = ({ tasks }) => {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;

  return (
<div className="task-panel-box">
    <h2>Task Panel</h2> 
        <div className="task-panel-circle" ><p>{completedTasks}/{totalTasks}</p></div>
    </div>
  );
};

TaskPanel.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      todo: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default TaskPanel;
