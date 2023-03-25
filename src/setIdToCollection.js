export  function setId(place, data) {
    let buttons = place.getElementsByTagName('button');

    for (let i = 0; i < buttons.length; i++) {
        const id = data[i].id;
        buttons[i].setAttribute('data-id', id);
    }
}