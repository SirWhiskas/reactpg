const items = [
    {
        _id: "1",
        nameSingular: "Rat tail",
        namePlural: "Rat tails"
    },
    {
        _id: "2",
        nameSingular: "Healing potion",
        namePlural: "Healing potions"
    },
    {
        _id: "3",
        nameSingular: "Long sword",
        namePlural: "Long swords"
    }
];

export function getItems() {
    return items;
}

export function getItem(id) {
    return items.find(i => i._id === id);
}