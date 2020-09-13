const express = require('express');
const port = 8000;

app = express();
app.use(express.static('local'))

// app.get('/' , (req,res)=>{
//     res.send("hello world");
// });

app.listen(port, () =>{
    console.log(`listening on localhost: 127.0.0.1:${port}`);

});