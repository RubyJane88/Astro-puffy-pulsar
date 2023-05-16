// src/components/Form.jsx
import React, { useState } from 'react';

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    margin: '0 auto',
};

const inputStyle = {
    marginBottom: '10px',
};

const buttonStyle = {
    cursor: 'pointer',
};

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        alert(`Submitted: Name = ${name}, Email = ${email}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;
