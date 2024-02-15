//some action either user or broswer will do 

//on click attribute

/*const ele=document.getElementById('mybut');
ele.onclick=dosmthng;*/




//on load attribute

/*const ele=document.body;
ele.onload=dosmthng;*/



//on chng att

/*const element=document.getElementById('mytxt');
element.onchange=dosmthng;*/




//mouse events

const ele=document.getElementById('mydiv');
//ele.onmouseover=dosmthng1;
//ele.onmouseleave=dosmthng2;
//ele.onmouseout=dosmthng3; //mouse goes out
ele.onmousedown=dosmthng4; //upto we are clickng

ele.onmouseup=dosmthng5;



/*function dosmthng(){
    alert('u clicked it');
}*/

function dosmthng1(){
    ele.style.backgroundColor='red';
}


function dosmthng2(){
    ele.style.backgroundColor='yellow';
}

function dosmthng3(){
    ele.style.backgroundColor='green';
}

function dosmthng4(){
    ele.style.backgroundColor='pink';
}

function dosmthng5(){
    ele.style.backgroundColor='violet';
}