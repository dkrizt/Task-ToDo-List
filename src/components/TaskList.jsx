import TaskItem from "./TaskItem";
import PropTypes from "prop-types";

const TaskList = ({ tasks, setTasks, setEditingTask }) => {
  

  function editTask(id){
    
    const taskToEdit= tasks.find((task)=> (task.id === id));
    setEditingTask(taskToEdit);
    
  }

  function toggleTaskCompletion(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(id) {
    setTasks((prevTasks) => {
      const taskToDelete = prevTasks.find((task) => task.id === id);
  
      if (taskToDelete.completed) {
        return prevTasks.filter((task) => task.id !== id);
      } else {
        window.alert("Tick the box to complete task before deleting. Click Okay to continue");
        setTimeout(() => {
          // This is where any additional logic after the alert could go
        }, 1000); 
        return prevTasks; // No changes to tasks if not completed
      }
    });

  }



  return (
    <div>
      {tasks?.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            task={task}
            key={task.id}
            toggleTaskCompletion={toggleTaskCompletion}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))
      ) : (
        <p className="no-task">It is very quite in here, Add a task.</p>
      )}
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      todo: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  setTasks: PropTypes.func.isRequired,
  setEditingTask: PropTypes.func.isRequired,
};

export default TaskList;
