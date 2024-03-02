import React, { Fragment, useState } from "react";

const EditTasks = ({ task }) => {
  const [description, setDescription] = useState(task.description);

  //Função Editar

  const updateDescription = async e => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:5000/tasks/${task.tasks_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      
<button 
  type="button" 
  class="btn btn-warning" 
  data-bs-toggle="modal" 
  data-bs-target={`#id${task.tasks_id}`}>

  Editar
</button>


<div 
  class="modal" 
  id={`id${task.tasks_id}`}
  onClick={() => setDescription(task.description)}
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Editar tarefas</h4>
        <button 
          type="button" 
          class="btn-close" 
          data-bs-dismiss="modal" 
          onClick={() => setDescription(task.description)}
          >
            &times;
        </button>
      </div>

      
      <div class="modal-body">
      <input
        type="text"
        className="form-control"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      </div>

      
      <div class="modal-footer">
        <button 
          type="button" 
          class="btn btn-primary" 
          data-bs-dismiss="modal"
          onClick={e => updateDescription(e)}>
          
            Confirmar
        </button>

        <button 
          type="button" 
          class="btn btn-danger" 
          data-bs-dismiss="modal"
          onClick={() => setDescription(task.description)}
          >
            Fechar
        </button>
      </div>

    </div>
  </div>
</div>
    </Fragment>
  );
};

export default EditTasks;
