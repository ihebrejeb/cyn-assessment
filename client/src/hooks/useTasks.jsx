import { useEffect, useState } from 'react';
import { getTasksByProjectId } from '../api';

function useTasks(projectId) {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    getTasksByProjectId(projectId)
      .then((res) => setTasks(res.data))
      .catch((err) => console.log(err));
  }, [projectId]);
  const addTask = (task) => {
    throw new Error('Not implemented');
  };
  return {
    tasks,
    addTask,
  };
}

export default useTasks;
