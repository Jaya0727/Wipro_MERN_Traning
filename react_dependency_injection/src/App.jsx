import { useState } from "react";
import EmployeeList from "./components/EmployeeList";
import { EmployeeService } from "./services/EmployeeService";
import { ServiceContext } from "./context/ServiceContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ServiceContext.Provider value={EmployeeService}>
      <EmployeeList />
    </ServiceContext.Provider>
  );
}

export default App;