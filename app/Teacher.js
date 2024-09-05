import React from 'react';

function Teacher({ name , hobbies }) {
    return (
        <div>
            <h1>Teacher's Name: {name}</h1>
            <p>Hobbies: {hobbies}</p>
        </div>
    );
}

export default Teacher;
