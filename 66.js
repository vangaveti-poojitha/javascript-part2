const mybut=document.getElementById('mybut');
const myanimation=document.getElementById('mydiv');

mybut.addEventListener('click',begin);



/*function begin(){
    let timerid=null;
    let x=0;
    let y=0;
    timerid=setInterval(frame,5);

    function frame(){
        if(y>=200){
            clearInterval(timerid);
        }
        else{
            y+=1;
            myanimation.style.top=y+'px';
        }
    }*/

/*    function begin(){
        let timerid=null;
        let x=0;
        let y=0;
        timerid=setInterval(frame,5);
    function frame(){
        if(x>=200){
            clearInterval(timerid);
        }
        else{
            x+=1;
            myanimation.style.left=x+'px';
        }
    }
}*/


   /*function begin(){
        let timerid=null;
        let x=0;
        let y=0;
        timerid=setInterval(frame,5);
    function frame(){
        if(x>=200 || y>=200){
            clearInterval(timerid);
        }
        else{
            x+=1;
            y+=1;
            myanimation.style.left=x+'px';
            myanimation.style.top=y+'px';
        }
    }
}
*/

 /*function begin(){
        let timerid=null;
        let degrees=0
        timerid=setInterval(frame,5);
    function frame(){
        if(degrees>=360){
            clearInterval(timerid);
        }
        else{
            
            degrees+=1
            myanimation.style.transform="rotateX("+degrees+"deg)";
        }
    }
}
*/


/*function begin(){
    let timerid=null;
    let degrees=0
    timerid=setInterval(frame,5);
function frame(){
    if(degrees>=360){
        clearInterval(timerid);
    }
    else{
        
        degrees+=1
        myanimation.style.transform="rotateY("+degrees+"deg)";
    }
}
}
*/

/*function begin(){
    let timerid=null;
    let degrees=0
    timerid=setInterval(frame,5);
function frame(){
    if(degrees>=360){
        clearInterval(timerid);
    }
    else{
        
        degrees+=1
        myanimation.style.transform="rotateZ("+degrees+"deg)";
    }
}
}*/

/*function begin(){
    let timerid=null;
    let degrees=0
    let x=0;
    let y=0;
    timerid=setInterval(frame,5);
function frame(){
    if(x>=200 || y>=200 || degrees>=360){
        clearInterval(timerid);
    }
    else{
        x+=1
        y+=1
        degrees+=1

        myanimation.style.transform="rotateY("+degrees+"deg)";
        myanimation.style.left=x+'px';
        myanimation.style.top=y+'px';
        
    }
}
}
*/



function begin(){
    let timerid=null;
    let scaleX=1;
    let scaleY=1;
    timerid=setInterval(frame,5);
function frame(){
    /*if(scaleX>=2 || scaleY>=2){
        clearInterval(timerid);*/
        if(scaleX<=0.1 || scaleY<=0.1){
            clearInterval(timerid);

    }
    else{
        /*scaleX+=0.01;
        scaleY+=0.01;*/

        scaleX-=0.01;
        scaleY-=0.01;


        myanimation.style.transform="scale("+scaleX+","+scaleY+")";
        
    }
}
}






