export default function checkUpSorted(arr) {
    return arr.sort((a, b) => b.health - a.health);
}