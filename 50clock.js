const mylabel=document.getElementById('mylabel');
setInterval(update,1000);
update();
function update(){

    let date=new Date();
    
    mylabel.innerHTML=formattime(date);
    function formattime(date){


        let hrs=date.getHours();
        let mns=date.getMinutes();
        let sec=date.getSeconds();


        let ap=hrs>=12 ? 'pm':'am';
        hrs=hrs%12 ||12;
        hrs=formatzero(hrs);
        mns=formatzero(mns);
        sec=formatzero(sec);
        
        return `${hrs}:${mns}:${sec} ${ap}`
    }

    function formatzero(time){
        time=time.toString();
        return time.length<2 ?'0'+time:time;
    }
}