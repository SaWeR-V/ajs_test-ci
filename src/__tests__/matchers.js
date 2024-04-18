import checkUpSorted from "../matchers";

let players = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
];

test('should show health status for each level', () => {
    const expected = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
    ];
    const result = checkUpSorted(players);
    expect(result).toEqual(expected);
});