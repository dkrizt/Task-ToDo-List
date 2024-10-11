/* 
import { useState } from "react";
import Modal from "./Modal"; 

function App() {
  const [tasks, setTasks] = useState([...]); 
  const [showModal, setShowModal] = useState(false);

  function deleteTask(id) {
    const taskToDelete = tasks.find((task) => task.id === id);

    if (taskToDelete.completed) {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } else {
      setShowModal(true);
    }
  } */

//   return (
//     <div>
//       {tasks.map((task) => (
//         <div key={task.id}>{/* Task display code */}</div>
//       ))}
//       {showModal && (
//         <Modal message="Please complete this task first." onClose={() => setShowModal(false)} />
//       )}
//     </div>
//   );
// }

// export default App;