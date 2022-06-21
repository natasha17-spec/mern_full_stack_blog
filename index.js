import express from 'express';


const app = express();

app.get('/',(req, res)=>{
    res.send('Hello World!')
})

app.listen(5000, (error)=>{
    if(error){
        console.log('Server Error')
    }
    console.log('Server OK')
})