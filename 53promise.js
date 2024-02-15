//promise = objts that encapsulates the result of an asynchronous oprtn let synchronous methods return values like synchronous methods
//      I promise to return  ans in future 

// the state i s'pending' then:'fulfilled or'rejected'

//the result is what can be retured 
//2parts producing and consuming 



//producing code

/*const promise=new Promise((resolve,reject)=>{
    let fileloaded=false;
    let filename='students'
    if(fileloaded){
        resolve(`${filename} file loaded`);
    }
    else{
        reject('file not loaded');//arguments
    }
    


});
//consuming code

promise.then((value)=>console.log(value))
    .catch(error=>console.log(error));*/ 


/*const promise=new Promise(resolve=>{
    setTimeout(resolve,5000);

});
promise.then(()=>console.log('thanks for waiting'));*/

const wait=(time)=>new Promise(resolve=>{
    
    setTimeout(resolve,time);
    
});
wait(3000).then(()=>console.log('taking longer than expctd'));




