import express from 'express'
import multer from 'multer'

// we can store the files uploaded from the form data by following:
const storage=multer.diskStorage({
    destination:'uploads',
    filename: (req,file,callback)=>{
        callback(null,file.originalname) // null represents error field as null
    }
})

const app = express();
const upload=multer({
    storage:storage,
    limits:{   // using limits property we can set the maximum fileSize which can be uploaded in bytes, in this case 1mb
        fileSize:1024000
    }
});  // in order to store the data from form-data
const PORT = 3000;


app.get("/", (req, res) => {
  res.send(`Hello express`);
});

// url-encoded middlware for parsing it
app.use(express.urlencoded({extended:true}))
// app.use(upload.array()) will be used for multiple text values in form-data
app.use(upload.single('image'))

// we can send files from postman as well, and we can log them using console.log(req.file)

app.post("/form",(req,res)=>{
  console.log(req.body); // to view the contents of url-encoded form, we must use a middleware to parse it
  console.log(req.file); // displaying the image sent
  res.send("Form received")
})

// choose form-data option in the body of postman API for this to work

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
