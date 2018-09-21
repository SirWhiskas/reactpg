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
                <option key="0" value="0"></option>
                {options.map(option => (
                    <option key={option._id} value={option._id}>{option.name}</option>
                ))}
            </select>
            {error && <div>{error}</div>}
        </div>
    );
}

export default Select;