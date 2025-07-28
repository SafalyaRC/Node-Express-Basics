// Cookies are stored on the user's computer, making them vulnerable to attacks like cross-site scripting (XSS) and cross-site request forgery (CSRF). Persistent cookies, which store data beyond a single session, can be used for tracking user behavior across websites, raising privacy concerns.
// Sessions solves this problem by storing user data on the server and associating it with an unique session ID, which is stored on the client as a cookie 

import express from 'express'
import cookieParser from 'cookie-parser'
import session from 'express-session'

const app=express();
const PORT=5000;
app.use(cookieParser())
app.use(session({
    secret:'sample-id', // session id
    resave:'false', // doesnt resave session everytime
    saveUninitialized:false
}))

app.get("/",(req,res)=>{
    res.send(`Hello, Express`)
})

// adding a session
app.get("/visit",(req,res)=>{
    if(req.session.page_views){
        req.session.page_views++;
        res.send(`You visited this page: ${req.session.page_views} times`)
    } else{
        req.session.page_views=1;
        res.send(`welcome for the first time`)
    }
})

// removing a session
app.get('/remove-session',(req,res)=>{
    res.session.destroy()
    res.send(`Session destroyed`)
})

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
})