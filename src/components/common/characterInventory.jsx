import React from 'react';
import { getItem } from '../services/itemService';

const CharacterInventory = ({ character, onClick }) => {
    const inventoryData = character.getInventory();
    console.log("inventory", inventoryData);

    const inventoryPage = inventoryData.map((value, index) => {
        console.log(value);
        let listItem = <p><b>-{value.type}:</b><span>{getItem(value.itemId).nameSingular}</span></p>;
        if (value.type === "weapon"){
            if (character.getMainHandWeapon() !== value.itemId) {
                listItem = <div><b>-{value.type}:</b><span>{getItem(value.itemId).nameSingular}</span><button onClick={() => onClick(value.itemId, value.type, "equip")}>Equip</button></div>;
            }else{
                listItem = <div><b>-{value.type}:</b><span>{getItem(value.itemId).nameSingular}</span><button onClick={() => onClick(value.itemId, value.type, "unequip")}>Unequip</button></div>;
            }
            
        } 
            
        return (
            <div key={index}>
                {listItem}
            </div>
        )
    });

    return ( 
        <React.Fragment>
            <h1>Inventory</h1>
            {inventoryPage}
        </React.Fragment>
     );
}
 
export default CharacterInventory;