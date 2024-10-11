import { useState } from "react";
import { Box } from "@mui/material";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskPanel from "./components/TaskPanel";
import TaskInput from "./TaskInput";
import { nanoid } from "nanoid";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: nanoid(),
      todo: "Give to the poor",
      completed: true,
    },
    {
      id: nanoid(),
      todo: "Read the Bible",
      completed: false,
    },
    {
      id: nanoid(),
      todo: "Give food Out",
      completed: false,
    },
    {
      id: nanoid(),
      todo: "Pray for the sick",
      completed: true,
    },
  ]);

const [editingTask, setEditingTask] = useState({});

  return (
    <>
      <Header />
      <Box
        sx={{
          bgcolor: "#e7e6e8",
          boxShadow: 1,
          borderRadius: 1,
          mt: 2,
          minWidth: 300,
          minHeight: 500,
        }}
      >
        <Box>
          <TaskPanel tasks={tasks} />
        </Box>
        <Box>
          <TaskInput tasks={tasks} setTasks={setTasks} editingTask={editingTask} setEditingTask={setEditingTask} />
        </Box>

        <Box sx={{ p: 1.5 }}>
          <TaskList tasks={tasks} setTasks={setTasks} setEditingTask={setEditingTask} />
        </Box>
      </Box>
    </>
  );
}

export default App;
