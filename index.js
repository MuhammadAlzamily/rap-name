const express = require('express');

const app = express();

app.use(express.json());

app.post('/:name',(req,res)=>{
	const real_name = req.params.name;
	res.json({rap_name:`Lil ${real_name}`});
})

app.listen(4444,()=>console.log("server up and running"))