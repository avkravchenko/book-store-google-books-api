export function getFromLocal(){
    const response = localStorage.getItem('myKey')
    const data = JSON.parse(response);
    console.log(response)
    return data;
}   