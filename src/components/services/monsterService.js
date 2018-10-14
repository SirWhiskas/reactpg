const monsters = [
    {
        _id: "1",
        name: "Rat",
        health: 5,
        maxDamage: 2,
        rewardXP: 3,
        rewardGold: 1,
        rewardItems: {
            item: { _id: "1", itemId: "1", type: "crafting" },
            dropPercentage: 75,
            isDefaultDrop: true
        }
    }
];

export function getMonsters() {
    return monsters;
}

export function getMonster(id) {
    return monsters.find(m => m._id === id);
}