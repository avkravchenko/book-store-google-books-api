export function counterLogicAdd (item, indi, counterData) {
    if(counterData){
        localStorage.setItem('counter', item)
        indi.innerHTML = JSON.parse(localStorage.getItem('counter'));
        indi.style.display = 'flex';
    }
    
}

export function counterLogicRemove (item, indi) {
    if (item) {
        let parsedCounter = JSON.parse(item);
        parsedCounter--
        localStorage.setItem('counter', parsedCounter)
    }

    indi.innerHTML = JSON.parse(localStorage.getItem('counter'));
}