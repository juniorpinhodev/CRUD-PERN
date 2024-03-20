import React, { Fragment, useState } from "react";

const InputTasks = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      await fetch("http://localhost:5000/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1
        className="text-center mt-5"
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: "bold",
          fontSize: "2.4rem",
          color: "#333",
        }}
      >
        LISTA DE TAREFAS
      </h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          className="btn btn-success mr-5"
          style={{ marginLeft: "10px" }}
        >
          adicionar
        </button>
      </form>
    </Fragment>
  );
};

export default InputTasks;
