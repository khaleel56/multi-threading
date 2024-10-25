const express = require('express')
const router = require('./router')
const app = express();
const port = 4000

app.use(express.json())

app.use('/api/v1', router)

app.use('*', (req, res, next)=>{
    next(new Error(`Can't find ${req.originalUrl} on this server`, 404));

})

app.listen(port, ()=>console.log(`server running on ${port}`))