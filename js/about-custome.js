let changeZindexLeft = (event)=>{
event.target.parentNode.style.zIndex = '3';
document.getElementById('i-button2').style.zIndex = '2';
}
let changeZindexRight = (event)=>{
event.target.parentNode.style.zIndex = '3';
document.getElementById('i-button').style.zIndex = '2';
}


document.getElementById('i-button').addEventListener('mousedown',changeZindexLeft);
document.getElementById('i-button2').addEventListener('mousedown',changeZindexRight);