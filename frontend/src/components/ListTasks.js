import React, { Fragment, useEffect, useState } from "react";

import EditTasks from "./EditTasks";

const ListTasks = () => {
  const [tasks, setTasks] = useState([]);

  //DELETE

  const deleteTask = async id => {
    try {
      const deleteTask = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "DELETE"
      });

      setTasks(tasks.filter(task => task.tasks_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };


  //GET

  const getTasks = async () => {
    try {
      const response = await fetch("http://localhost:5000/tasks");
      const jsonData = await response.json();

      setTasks(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  console.log(tasks);

  return (
    <Fragment>
      {" "}
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Editar</th>
            <th>Deletar</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.tasks_id}>
              <td>{task.description}</td>
              <td>
                <EditTasks task={task} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTask(task.tasks_id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTasks;
