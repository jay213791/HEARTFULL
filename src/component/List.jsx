import { useState } from "react";

function List() {
  const [studentList, setStudentList] = useState([
    { id: 1, name: "jay", age: 19 },
    { id: 2, name: "vico", age: 19 },
    { id: 3, name: "jelord", age: 19 },
  ]);

  const removeStudent = (id) => {
    const confirmDelete = window.confirm("are u sure?");
    if (confirmDelete) {
      setStudentList(prev =>
        prev.filter(student => student.id !== id)
      );
      window.alert("student removed")
    }
  };

  const addStudent = () => {
    const name = window.prompt("enter name:")
    const age = window.prompt("enter age:")
    if (name) {
      const NewData = {
        id: studentList.length > 0 ? Math.max(...studentList.map(student => student.id) + 1) : 1,
        name: name,
        age: age
      };
      setStudentList([...studentList, NewData]);
    }
  }

  return (
    <div>
      <h1>Student List</h1>
      <button onClick={addStudent}>Add</button>
      <ul>
        {studentList.map((student) => (
          <li key={student.id}>
            {student.name} - {student.age} years old
            <button onClick={() => removeStudent(student.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
