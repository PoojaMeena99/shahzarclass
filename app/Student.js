import React from 'react';

function Student({ Student }) {
    return (
        <div>
            <h1>Student Name: {Student.name}</h1>
            <p>Hobbies: {Student.hobbies}</p>
        </div>
    );
}

export default Student;
