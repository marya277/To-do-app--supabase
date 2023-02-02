import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";

 const TasksList =({ done = false }) =>{
  const { loading, getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks(done);
  }, [done]);

  const renderTasks=()=> {
    if (loading) {
      return <p>Loading...</p>;
    } else if (tasks.length === 0) {
      return <p>No tasks</p>;
    } else {
      return tasks.map((task) => {
        return <TaskCard key={task.id} task={task} />;
      });
    }
  }

  return <div className="">{renderTasks()}</div>;
}

export default TasksList;