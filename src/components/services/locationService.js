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
        locationiToSouth: null,
        locationiToWest: null
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
        locationiToSouth: "1",
        locationiToWest: null
    },
    {
        _id: "3",
        name: "Alchemist's hut",
        description: "There are many strange plants on the shelves.",
        availableQuest: { _id: "1" },
        residingMonster: null,
        requiredItem: null,
        locationToNorth: null,
        locationToEast: "3",
        locationiToSouth: "1",
        locationiToWest: null
    }
]