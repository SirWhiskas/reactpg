import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { getRaces, getRace } from './services/characterRaceService';

class NewGameForm extends Form {
    state = {
        data: { characterName: '', race: '' },
        characterDescription: getRace(getRaces()[0]._id).description,
        errors: {}
    };

    schema = {
        characterName: Joi.string().required().label('Character Name'),
        race: Joi.required()
    }

    doSumbit = () => {
        console.log('Character created');
    };

    doChange = data => {
        if (data.name === 'race') {
            let index = data.options.selectedIndex;
            let id = data.options[index].id;
            let description = getRace(id).description;

            this.setState({ characterDescription: description });
        }
    };

    render() {
        return (
            <div className="creation-form">
                <div className="grid-container">
                    <div className="row">
                        <div className="col-3">
                            <h1>Character Creation</h1>
                            <form onSubmit={this.handleSubmit}>
                                {this.renderInput('characterName', 'Character Name')}
                                {this.renderSelect('race', 'Race', getRaces())}
                                {this.renderButton('Create', 'hvr-shutter-in-horizontal')}
                            </form>
                        </div>
                        <div className="col-2 character-panel">
                            {this.state.characterDescription}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewGameForm;