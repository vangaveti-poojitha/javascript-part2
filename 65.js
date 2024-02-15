
const mydiv=document.getElementById('mydiv');

/*window.addEventListener('keydown',(move)=>console.log(move.key));*/
window.addEventListener('keydown',arrowdown);

let x=0;
let y=0;

function arrowdown(event){

    switch(event.key){
        case 'ArrowDown':
            y+=5;
            mydiv.style.top=y+'px';
            break;
        case 'ArrowUp':
            y-=5;
            mydiv.style.top=y+'px';
            break;
        case 'ArrowLeft':
            x-=5;
            mydiv.style.left=x+'px';
            break;
        case 'ArrowRight':
            x+=5;
            mydiv.style.left=x+'px';
            break;
        default:
            break;

    }



}




