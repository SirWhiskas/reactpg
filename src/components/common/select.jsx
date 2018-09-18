import React from 'react';

const Select = ({ name, label, error, options, ...rest }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <select
                {...rest}
                name={name}
                id={name}
            >
                {options.map(option => (
                    <option key={option._id} id={option._id}>{option.name}</option>
                ))}
            </select>
            {error && <div>{error}</div>}
        </div>
    );
}

export default Select;