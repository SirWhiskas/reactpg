const weapons = [
    {
        _id: "1",
        itemId: "3",
        type: "melee",
        minDamage: 5,
        maxDamage: 10
    }
];

export function getWeapons() {
    return weapons;
}

export function getWeapon(id) {
    return weapons.find(w => w._id === id);
}