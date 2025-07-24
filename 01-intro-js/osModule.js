const os=require('os') // os module lets us interact with the OS

const user=os.userInfo() // info about current user
console.log(user); 

console.log(`system uptime: ${os.uptime()} seconds`); // calculate system uptime

const currentOS={
    name: os.type(),
    release: os.release(),
    total_memory: os.totalmem(),
    free_memory: os.freemem()
};
console.log(currentOS);
