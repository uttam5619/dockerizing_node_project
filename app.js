import express from 'express'

const app= express()


app.use(express.json())


const responseObject={
    success:true,
    message:'application working',
    dummyData:[
        {
            name:'mohan',
            email:'mohan@gmail.com'
        },
        {
            name:'sohan',
            email:'sohan@gmail.com'
        }
    ]
}

app.get('/',(req,res)=>{
    res.send(responseObject)
})

const port =6565
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})


