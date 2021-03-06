import React, { Component } from 'react';
import Joi from 'joi-browser';
import { Link } from 'react-router-dom';
import Input from './input';
import Select from './select';

class Form extends Component {
    state = {
        data: {},
        errors: {}
    }

    validate = () => {
        const options = { abortEarly: false }
        const { error } = Joi.validate(this.state.data, this.schema, options);
        if (!error) return null;

        const errors = {}
        for (let item of error.details)
            errors[item.path[0]] = item.message;

        return errors;
    };

    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(e);
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;

        this.doSubmit();
    };

    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = { ...this.state.data } // Cloning
        data[input.name] = input.value;
        this.setState({ data, errors });
        this.doChange(input);
    };

    renderButton(label, nameOfClass) {
        return (
            <button
                className={nameOfClass}
                disabled={this.validate()}
            >
                {label}
            </button>
        );
    }

    renderNavButton(label, nameOfClass, linkTo) {
        return (
            <Link to={linkTo}>
                <button
                    className={nameOfClass}
                >
                    {label}
                </button>
            </Link>
        );
    }

    renderInput(name, label, type = 'text') {
        const { data, errors } = this.state;

        return (
            <Input
                type={type}
                name={name}
                label={label}
                value={data[name]}
                error={errors[name]}
                onChange={this.handleChange}
            />
        );
    }

    renderSelect(name, label, options = null) {
        const { data, errors } = this.state;

        return (
            <Select
                name={name}
                label={label}
                value={data[name]}
                error={errors[name]}
                onChange={this.handleChange}
                options={options}
            />
        );
    }


}

export default Form;