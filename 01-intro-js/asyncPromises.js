const {readFile}=require('fs')

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

promise('../content/second.txt')
.then( (result)=>console.log(result) )
.catch( (error)=>console.log(error) );