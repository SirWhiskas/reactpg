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
                <option key="0" id="0"></option>
                {options.map(option => (
                    <option key={option._id} id={option._id}>{option.name}</option>
                ))}
            </select>
            {error && <div>{error}</div>}
        </div>
    );
}

export default Select;