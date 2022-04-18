import React from 'react';
import './StudentRecord.css'



const data = [
    { name: "Karim", class: 9, grade: "A+" },
    { name: "Rahim", class: 10, grade: "A+" },
    { name: "Saiful", class: 11, grade: "A"},
    { name: "Rahima", class: 10, grade: "A+"},
    { name: "Sokhina", class: 9, grade: "A"},
    { name: "Kuddus", class: 12, grade: "A+"},
    { name: "Abbash", class: 10, grade: "A"},
  ]

const StudentRecord = () => {
    return (
        <div className='App'>
        <h2 className='text-center text-info mt-5 mb-5'>My Prev Student Records</h2>
          <table className='mb-5'>
            <tr>
              <th className='text-info'>Name</th>
              <th className='text-info'>Age</th>
              <th className='text-info'>Gender</th>
            </tr>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.name}</td>
                  <td>{val.class}</td>
                  <td>{val.grade}</td>
                </tr>
              )
            })}
          </table>
        </div>
      );
};

export default StudentRecord;