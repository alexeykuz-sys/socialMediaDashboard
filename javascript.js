
let switchButton = document.getElementById('switch'); 

switchButton.addEventListener('change', changeMode);

let elements = [];
let classNames = [];

function addClass(elements, classNames) {

    if (!(elements instanceof Array)) {
        elements.classList.add(classNames);
        return;
    }

    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add(classNames[i]);
    }
}

function changeMode (status){
    
}