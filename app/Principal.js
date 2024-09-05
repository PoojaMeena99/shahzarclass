import React from 'react';

function Principal({ ...principal }) {
    return (
        <div>
            <h1>Principal Name: {principal.name}</h1>
            <p>Hobbies: {principal.hobbies}</p>
        </div>
    );
}

export default Principal;
