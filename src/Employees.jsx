import { useEffect, useState } from "react";
import TeamPage from "./Team";
import { Link } from "react-router-dom";

function Employees() {


  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", position: "Software Engineer" },
    { id: 2, name: "Jane Smith", position: "Project Manager" },
    { id: 3, name: "Alice Johnson", position: "UI/UX Designer" },
  ]);


  const [newEmployee, setNewEmployee] = useState({ name: "", position: "" });

  const addEmployee = () => {
    if (newEmployee.name && newEmployee.position) {
      setEmployees([...employees, { id: employees.length + 1, ...newEmployee }]);
      setNewEmployee({ name: "", position: "" });
    }
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };


  useEffect(() => {
    console.log('Employee list updated:', employees);
  }, [newEmployee]);

  return (
    <div className="flex flex-col items-center justify-center  p-6 max-w-lg mx-auto">
      {/* <TeamPage/> */}
      <h2 className="text-4xl font-semibold text-center text-gray-800 mb-10 mt-4">Employees Data</h2>
      <div className="mb-10 flex gap-2">
        <input className={`border border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          placeholder="Employee Name" value={newEmployee.name} onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })} />
        <input className={`border border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          placeholder="Position" value={newEmployee.position} onChange={(e) => setNewEmployee({ ...newEmployee, position: e.target.value })} />
        <button className='border border-gray-600 rounded-lg p-2 bg-green-400' onClick={addEmployee}>Add Employee</button>
      </div>

      <div>
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Position</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{employee.id}</td>
                <td className="border border-gray-300 px-4 py-2">{employee.name}</td>
                <td className="border border-gray-300 px-4 py-2">{employee.position}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button className='border border-gray-600 rounded-lg p-2 bg-red-400'
                    variant="destructive" onClick={() => deleteEmployee(employee.id)}>
                    Delete
                  </button>

                  <Link to={`/about/team?name=${employee.name}&position=${employee.position}`}>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

       
      </div>
    </div>
  )
}

export default Employees;