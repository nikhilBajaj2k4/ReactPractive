import { useState } from 'react';

import Component from './Component.jsx'

export default function Employees() {

  const [employees, setEmployees] = useState([{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
  },
  {
    id: 2,
    fullName: "kardunga geli Bailey",
    designation: "Node Developer",
  },
  {
    id: 2,
    fullName: "Lelunga Bailey",
    designation: "Node Developer",
  },
  {
    id: 2,
    fullName: "Mil Kabhi Bailey",
    designation: "Node Developer",
  }])

  return (
    <main>
      {
        employees.map((employee) => (
          <Component kaam={employee.designation} naam={employee.fullName} />
        ))
      }
    </main>
  )
}