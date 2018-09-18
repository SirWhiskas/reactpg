export const races = [
    {
        _id: "1",
        name: "Human",
        description: "Humans are relatively new race. Despite their short life-spans, lack of history, and weak nature, They are quite clever and resourceful. Given enough time, they may indeed bring the world to a new age."
    },
    {
        _id: "2",
        name: "High Elf",
        description: "The High Elves are the oldest and most intellectual of all races. They have survived through thousands and thousands of years due to their unmatched prowess in magic and unenumerable amount of knowledge they have accumulated."
    },
    {
        _id: "3",
        name: "Dwarf",
        description: "Dwarves tend to be very reclusive and would be very happy staying in their mountains. However, that doesn't mean they just sit around in their homes doing nothing. This race has accumulated a vast amount of knowledge of natural resources and, with that, can craft the best armours and weapons in the world. No other race can match their quality and their skill for extracting resources."
    }
];

export function getRaces() {
    return races;
}

export function getRace(id) {
    return races.find(r => r._id === id);
}