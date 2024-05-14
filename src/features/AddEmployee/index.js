import React, { useState } from "react";

export default function AddEmployee({ employeeData, setEmployees, onUnmount }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [salary, setSalary] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    setEmployees((prevEmployees) => {
      const newEmployees = [
        {
          id: prevEmployees.length + 1,
          firstName,
          lastName,
          salary,
          email,
          date,
        },
        ...prevEmployees,
      ];
      return newEmployees;
    });
    onUnmount();
  };

  return (
    <form onSubmit={handleAdd}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          gap: "10px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <label for="firstName">First Name</label>
          <input
            type="text"
            value={firstName}
            style={{
              width: "50%",
            }}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <label for="lastName">Last Name</label>
          <input
            type="text"
            value={lastName}
            style={{ width: "50%" }}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <label for="salary">Salary</label>
          <input
            type="number"
            value={salary}
            style={{ width: "50%" }}
            onChange={(e) => setSalary(e.target.value)}
            required
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <label for="email">Email</label>
          <input
            type="email"
            value={email}
            style={{ width: "50%" }}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <label for="lastName">Date</label>
          <input
            type="date"
            value={date}
            style={{ width: "50%" }}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <button type="submit">Save</button>
        <button onClick={() => onUnmount()}>Cancel</button>
      </div>
    </form>
  );
}
