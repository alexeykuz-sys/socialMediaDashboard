
let switchButton = document.getElementById('switch'); 
let modeLight = document.getElementById('light')
let modeDark = document.getElementById('dark')
const slider = document.getElementById('slider')
let wrapper = document.getElementsByClassName('card-wrapper')
console.log(wrapper)



let el = document.querySelectorAll('.light')
console.log(typeof('el'))

let elements = [];
let classNames = [];

function addClass(elements, classNames) {

    if (!(elements instanceof String)) {
        elements.classList.add(classNames);
        return;
    }
}


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
    console.log(modeDark, modeLight)
}
switchButton.addEventListener('change', changeMode)

function changeModeCard(status){
for (i=0; i<el.length; i++){
    let elements = ['class-inner']
    let classNames = ['dark']
    if(status = document.classList.contains('light') ){
        
    }
}
}
        
    



// function changeMode(){
//     if(modeLight.classList.contains('show')){
//         modeLight.classList.remove('show')
//         modeLight.classList.add('none')
//         modeDark.classList.add('show')
//         slider.style.backgroundColor = 'var(--LimeGreen)'
        

//     } else if (modeDark.classList.contains('show')){
//         modeDark.classList.remove('show')
//         modeLight.classList.remove('none')
//         modeLight.classList.add('show')
//         slider.style.backgroundColor = '#ccc'
        
//     }
//     console.log(modeDark, modeLight)
// }
// switchButton.addEventListener('change', changeMode)

// let elements = [];
// let classNames = [];

// function addClass(elements, classNames) {

//     if (!(elements instanceof Array)) {
//         elements.classList.add(classNames);
//         return;
//     }
// }

// function removeClass(elements, classNames) {

//     if (!(elements instanceof Array)) {
//         elements.classList.remove(classNames);
//         return;
//     }

//     for (let element of elements) {
//         for (let name of classNames) {
//             element.classList.remove(name)
//         }
//     }
// }

// function LightDark(){
//     console.log(modeDark, modeLight)
//     if(modeLight.classList.contains('show')){
//         elements=['body']
//         classNames = ['dark']
//         addClass(elements, classNames)
//         console.log(status)
//         removeClass(elements)
//     };
// console.log('a')
// };
// LightDark()