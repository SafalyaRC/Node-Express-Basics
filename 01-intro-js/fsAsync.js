const {readFile}=require('fs')

readFile('../content/second.txt','utf-8', (err,result)=>{
    if(err){
        console.log(err);
        return;
    } else{
        console.log(result);
    }
})