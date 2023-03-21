export function addToLocal(item) {
    const convertToJson = JSON.stringify(item);
    localStorage.setItem('myKey', convertToJson);
}