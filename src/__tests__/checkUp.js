import checkUp from "../checkup";

test.each([
    ['Маг', 65, 'healthy'],
    ['Орк', 48, 'wounded'],
    ['Эльф', 12, 'critical'],
    ['Нежить', 100, 'healthy'],
    ['Артас', 0, 'dead']
])(
('should show health status for %s level with %i hit-points'),
(character, hitPoints, expected) => {
    const result = checkUp(character, hitPoints);
    expect(result).toBe(expected)
});