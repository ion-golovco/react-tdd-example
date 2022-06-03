import express  from "express";

const app = express();

app.post('/get-file-from-user', (req,res)=>{
   res.json('fas');
})

app.listen(
    5000, ()=>{
        console.log('App listening')
    }
)

