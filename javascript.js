
let switchButton = document.getElementById('switch'); 
let modeLight = document.getElementById('light-button')
let modeDark = document.getElementById('dark-button')
const slider = document.getElementById('slider')
let wrapper = document.getElementsByClassName('card-wrapper')




function changeMode(){
    if(modeLight.classList.contains('show')){
        modeLight.classList.remove('show')
        modeLight.classList.add('none')
        modeDark.classList.add('show')
        slider.style.backgroundColor = 'var(--LimeGreen)'
        bodyModeChange()

    } else if (modeDark.classList.contains('show')){
        modeDark.classList.remove('show')
        modeLight.classList.remove('none')
        modeLight.classList.add('show')
        slider.style.backgroundColor = '#ccc'
        bodyModeChange()
    }

    console.log(modeDark, modeLight)
}
switchButton.addEventListener('change', changeMode, bodyModeChange)
console.log(modeDark, modeLight)


function bodyModeChange (){
    if(modeDark.classList.contains('show')){
        document.body.style.backgroundColor = 'var(--VeryDarkBlueBG)'
        darkCardMode()
        
    } else if (modeLight.classList.contains('show')){
        document.body.style.backgroundColor = 'var(--WhiteBG)'
        lightCardMode()
        
    }
}

function lightCardMode(){
    let card =  document.getElementsByClassName('card-inner')
    let card2 =  document.getElementsByClassName('card-inner-2')
    
    for (let i=0;i<card.length; i++){
        card[i].style.backgroundColor = 'var(--VeryPaleBlueTopBGPattern)'
    }
    for (let i=0;i<card2.length; i++){
        card2[i].style.backgroundColor = 'var(--VeryPaleBlueTopBGPattern)'
    }
}

function darkCardMode(){
    let card =  document.getElementsByClassName('card-inner')
    let card2 =  document.getElementsByClassName('card-inner-2')
    for (let i=0;i<card.length; i++){
        card[i].style.backgroundColor = 'var(--DarkDesaturtedBlueCardBG)'
    }
    for (let i=0;i<card2.length; i++){
        card2[i].style.backgroundColor = 'var(--DarkDesaturtedBlueCardBG)'
    }
}
