//generate a random color
const randColor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#';
    for(let i = 0; i <6; i++){
        color  += hex[parseInt(Math.random()*16)]
    }
    return color;
}
console.log(randColor())

let inetrvalID;
const startChanging = function(){
    if(!inetrvalID){
        inetrvalID = setInterval(function(){
            document.body.style.backgroundColor = randColor();
        },1000)
    }
}
const stopChanging = function(){
    clearInterval(inetrvalID);
    inetrvalID = null;
}
document.querySelector('#start').addEventListener('click',startChanging);
document.querySelector('#stop').addEventListener('click',stopChanging);
