export  function setId(place, data) {
    const buttons = place.getElementsByTagName('button');
    console.log(buttons)
    for (let i = 0; i < buttons.length; i++) {
        const id = data[i].id;
        buttons[i].setAttribute('data-id', id);
    }
}