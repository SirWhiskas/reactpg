import React from 'react';

const CharacterProfile = ({ character }) => {
    const profileData = character.getProfile();
    
    // console.log(profileData);
    const profilePage = Object.keys(profileData).map((keyname, keyindex) => {
        return (
            <div key={keyindex}>
                <p><b>- {keyname}:</b><span>{profileData[keyname]}</span></p>
            </div>
        );
    });

    return (
        <React.Fragment>
            <h1>Character Profile</h1>
            {profilePage}
        </React.Fragment>
    );
}

export default CharacterProfile;