import * as questsAPI from "./questService.js";
import * as itemsAPI from "./itemService.js";

const locations = [
    {
        _id: "1",
        name: "Home",
        description: "Your house. You really need to clean up the place.",
        availableQuest: null,
        residingMonster: null,
        requiredItem: null,
        locationToNorth: "2",
        locationToEast: null,
        locationToSouth: null,
        locationToWest: null
    },
    {
        _id: "2",
        name: "Town square",
        description: "You see a busy town filled with all kinds of people.",
        availableQuest: null,
        residingMonster: null,
        requiredItem: null,
        locationToNorth: null,
        locationToEast: "3",
        locationToSouth: "1",
        locationToWest: null
    },
    {
        _id: "3",
        name: "Alchemist's hut",
        description: "There are many strange plants on the shelves.",
        availableQuest: { _id: "1", name: "Clear the alchemist's garden" },
        residingMonster: null,
        requiredItem: null,
        locationToNorth: null,
        locationToEast: null,
        locationToSouth: null,
        locationToWest: "2"
    }
];

export function getLocations() {
    return locations;
}

export function getLocation(id) {
    return locations.find(l => l._id === id);
}

