import React, { useEffect, useState } from "react";
import employeeStore from "../stores/EmployeeStore";
import {addEmployee, deleteEmployee} from "../actions/EmployeeActions";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // initial load
    setEmployees(employeeStore.getAllEmployees());

    const updateUI = () => {
      setEmployees([...employeeStore.getAllEmployees()]);
    };

    // ✅ correct listener method
    employeeStore.addChangeListener(updateUI);

    return () => {
      employeeStore.removeChangeListener(updateUI);
    };
  }, []);

  return (
    <div>
      <h2>Employee List</h2>

      <button onClick={() => addEmployee("Jaya")}>
        Add Employee
      </button>

      {employees.map((emp, index) => (
        <div key ={index}>
            <span>{emp}</span>
            <button onClick={() => deleteEmployee(index)}>
                DELETE
            </button>
        </div>
        ))}
    </div>
  );
}

export default EmployeeList;