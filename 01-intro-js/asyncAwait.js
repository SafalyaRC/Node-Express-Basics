const {readFile}=require('fs');

const promise = (path)=>{
    return new Promise( (resolve,reject)=>{
        readFile(path, 'utf-8', (error,data)=>{
            if(error){
                reject(error)
            } else{
                resolve(data)
            }
        })
    } )
}

const displayText = async()=>{
    try {
        const secondFileText=await promise("../content/second.txt")
        console.log(secondFileText);
    } catch (error) {
        console.log(error);
    }
}
displayText();