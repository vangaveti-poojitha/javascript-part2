//error= obj with a description 
//      smthng went wrng 



//throw =   executes a user defined error
// cant open a file 
//lose connection
// user types incorrect input 
// typeerror

/*try{
    console.lag();
}
catch(error){
    console.log(error);
}*/ 


try{
    let x=window.prompt('enter a #');
    x=Number(x);
    console.log(`${x} is a number`);
    if(isNaN(x)) throw 'that was not a number';
    if(x=='') throw 'that was a empty string';

}
catch(error){
    console.log(error);
}

finally{
    console.log('this always executes');
}


