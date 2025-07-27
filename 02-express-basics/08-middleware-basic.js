// In Express.js, middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle. They act as a bridge between the request and response, allowing you to perform actions like modifying the request or response, ending the request-response cycle, or calling the next middleware in the chain

// middleware workflow: Client req --> Middleware (if used) --> Route handler --> Response to client
// middlware used in- auth,logging,req parsing, error handling

// learn about types of middleware here: https://expressjs.com/en/guide/using-middleware.html

// application-level: applicable to all routes in the app (i.e., app.use(loggerMiddleware) )
// router-level: applicable to only the selected routes (i.e., inside the route file: router.use(authMiddleware) )
// built-in: inbuilt express middleware such as: app.use (express.json())
// third-party: external libraries for adding functionality ( app.use(cors()) )
// error-handling: handles errors in req lifecycles ( app.use(errorHandler) )


import express from 'express'

const app=express()
const PORT=5000;

app.get('/',(req,res)=>{
    res.send(`Hello, Express!`);
})

// next() will call the router handler after the middleware is processed
app.use((req,res,next)=>{
    console.log(`New request received at ${Date.now()}`);
    next();    
})

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})