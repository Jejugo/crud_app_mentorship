import React from "react";

export default function DeleteEmployee({ item, onUnmount, setEmployees }) {
  const handleDelete = () => {
    setEmployees((prevEmployees) => {
      return prevEmployees.filter((employee) => employee.id !== item.id);
    });
    onUnmount();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "0 auto",
        gap: "10px",
      }}
    >
      <h1>Deseja deletar esse registro?</h1>
      <div>
        <button onClick={handleDelete}>Sim</button>
        <button onClick={() => onUnmount(false)}>Cancela</button>
      </div>
    </div>
  );
}
