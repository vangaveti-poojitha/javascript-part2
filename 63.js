// addEventListner(event,function,usecapture)
//u can add many event handlers to one element
//even the same event that invokes different function

const innerdiv=document.getElementById('innerdiv');


/*innerdiv.addEventListener('mouseover',changered);
innerdiv.addEventListener('mouseout',changegreen);
function changered(){
    innerdiv.style.backgroundColor='red'; 
}
function changegreen(){
    innerdiv.style.backgroundColor='green';

}*/

// if we have 1 ele in other element then usecapture shld me used 
const outerdiv=document.getElementById('outerdiv');
innerdiv.addEventListener('click',changeblue);
outerdiv.addEventListener('click',changeblue,true);

function changeblue(){
    this.style.backgroundColor='lightblue';
    alert(this.id);
    //frst inner div will be chnged
    //but if we change usecapture of outerdiv to true then frst outerdive will change
}

