import * as itemsAPI from "./itemService";

const quests = [
    {
        _id: "1",
        name: "Clear the alchemist's garden",
        description: "Kill rats in the alchemist's garden and bring back 3 rat tails. You will receive a healing potion and 10 gold pieces.",
        rewardGold: 20,
        rewardXP: 10,
        rewardItems: {
            item_1: {
                itemId: "2",
                amount: 1
            }
        },
        requiredItems: {
            item_1: {
                itemId: "1",
                amount: 3
            }
        }
    }
];

export function getQuests() {
    return quests;
}

export function getQuest(id) {
    return quests.find(q => q._id === id);
}