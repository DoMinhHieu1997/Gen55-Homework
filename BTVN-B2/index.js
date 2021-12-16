const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const router = require('./router');

// var  content = [{name:'Đỗ Minh Hiếu', age:22}];
// fs.writeFile('student-list.json', JSON.stringify(content), (err) => {
//     if (err) { 
//         console.log(err); 
//         return; 
//     };
//     console.log("Tạo file successfully!");
// });
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', router);

app.use('/', (req, res) => {
    res.send('This is home page');
});

app.listen(port, ()=> {
    console.log('listen sucess '+ `${port}`);
});