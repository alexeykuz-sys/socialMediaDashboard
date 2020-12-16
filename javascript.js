
let switchButton = document.getElementById('switch'); 
console.log(switchButton)
let modeLight = document.getElementById('light')
let modeDark = document.getElementById('dark')
const slider = document.getElementById('slider')


function changeMode(){
    if(modeLight.classList.contains('show')){
        modeLight.classList.remove('show')
        modeLight.classList.add('none')
        modeDark.classList.add('show')
        slider.style.backgroundColor = 'var(--LimeGreen)'
        

    } else if (modeDark.classList.contains('show')){
        modeDark.classList.remove('show')
        modeLight.classList.remove('none')
        modeLight.classList.add('show')
        slider.style.backgroundColor = '#ccc'
    }
    
}
switchButton.addEventListener('change', changeMode)

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

function removeClass(elements, classNames) {

    if (!(elements instanceof Array)) {
        elements.classList.remove(classNames);
        return;
    }

    for (let element of elements) {
        for (let name of classNames) {
            element.classList.remove(name)
        }
    }
}

function LightDark(){
    if(modeDark.classList.contains('show')){
        elements=[body]
        classNames = [show]
        status = addClass(body, dark)
    };
console.log('a')
};
LightDark()