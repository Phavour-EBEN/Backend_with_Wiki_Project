const fs = require('fs')

fs.readFile('read.txt', 'utf8',(err,data)=>{
    if(err)throw err
    console.log(data)
})