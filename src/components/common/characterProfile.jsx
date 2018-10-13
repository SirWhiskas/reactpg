import React from 'react';
import { getItem } from '../services/itemService';

const CharacterProfile = ({ character }) => {
    const profileData = character.getProfile();
    const inventoryData = character.getInventory();
    console.log("inventory", inventoryData);
    // console.log(profileData);
    const profilePage = Object.keys(profileData).map((keyname, keyindex) => {
        return (
            <div key={keyindex}>
                <p><b>- {keyname}:</b><span>{profileData[keyname]}</span></p>
            </div>
        );
    });

    const inventoryPage = inventoryData.map((value, index) => {
        console.log(value);
        let listItem = <p><b>-{value.type}:</b><span>{getItem(value.itemId).nameSingular}</span></p>;
        if (value.type === "weapon") 
            listItem = <div><b>-{value.type}:</b><span>{getItem(value.itemId).nameSingular}</span><button>Equip</button></div>;
        return (
            <div key={index}>
                {listItem}
            </div>
        )
    });

    return (
        <React.Fragment>
            <div>
                <h1>Character Profile</h1>
                {profilePage}
            </div>
            <div>
                <h1>Inventory</h1>
                {inventoryPage}
            </div>
        </React.Fragment>
    );
}

export default CharacterProfile;