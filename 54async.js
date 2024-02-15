//async = makes a function return a promise


//producing code
//frst

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


//chngd to

/*async=function loadfile(){
    let fileloaded=true;
    let filename='students';
    if(fileloaded){
       return `${filename} file loaded`;
    }
    else{
        throw 'file not loaded';
    }

}

loadfile().then(value=>console.log(value))
    .catch(error=>console.log(error));
*/

