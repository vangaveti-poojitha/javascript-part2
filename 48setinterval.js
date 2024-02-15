//setInterval()=invokes a func repeatedly after anumber of milliseconds
//   asynchronous func (doesnt pause execution of ur prgrm)

let count =0;
let max=window.prompt('count up to what');
max=Number(max);
let s1=setInterval(countup,1000);
function countup(){
    count+=1;
    console.log(count);
    if(count>=max){
        clearInterval(s1);
    }
}