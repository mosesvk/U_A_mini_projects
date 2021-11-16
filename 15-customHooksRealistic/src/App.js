import React, { useCallback, useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from  "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";

function App() {
  const [tasks, setTasks] = useState([]);

  //this useCallback() is ensuring that the transformTasks object will not always change over time but the url will in the httpData variable
  const transformTasks = useCallback((tasksObj) => {
    const loadedTasks = [];
    for (const taskKey in tasksObj) {
      loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
    }
    setTasks(loadedTasks);
  }, []);

  // from the use-http.js hook file
  const httpData = useHttp(
    { url: "https://react-http-b68b7-default-rtdb.firebaseio.com/tasks.json" },
    transformTasks
  );
  const { isLoading, error, sendRequest: fetchTasks } = httpData;

  // having 'fetchTasks' as a dependency would cause a forever loop
  // That's why we need the useCallback() in the use-Http.js file
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
