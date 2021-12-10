var fs = require('fs');
const path = require('path');

//Create
var  content = [{name:'Đỗ Minh Hiếu', age:22}];
fs.writeFile('student.json', JSON.stringify(content), (err) => {
    if (err) { 
        console.log(err); 
        return; 
    };
    console.log("Tạo file successfully!");
});

//Read
fs.readFile(path.resolve(__dirname, 'student.json'), 'utf8', function(err,data) {
    if (err) return;
    console.log("Nội dung file:", data);
});

//Update
var content = {name:'Đỗ Lê Minh Hiển', age:18};
fs.readFile(path.resolve(__dirname, 'student.json'), 'utf8', function(err,data) {
    if (err) return;
    var dataParse = JSON.parse(data);
    dataParse.push(content);

    fs.writeFile('student.json', JSON.stringify(dataParse), (err) => {
        if (err) { 
            console.log(err); 
            return; 
        };
        console.log("Update file successfully!");
    });
});

//Delete
fs.unlink('student.json', function (err) {
    if (err) throw err;
    console.log('File deleted!');
});