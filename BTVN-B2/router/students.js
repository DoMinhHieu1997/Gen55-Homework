const express = require('express');
const fs = require('fs');
const path = require('path');

let studentRouter = express.Router();

//Get all student
studentRouter.get('/all', (req, res)=>{
    fs.readFile(path.resolve('./', 'student-list.json'), 'utf8', function(err,data) {
        if (err) return;
        res.send(JSON.parse(data));
    });
});

studentRouter.get('/:id', (req, res) => {
    fs.readFile(path.resolve('./', 'student-list.json'), 'utf8', function(err,data) {
        if (err) return;
        var dataParse = JSON.parse(data),
            hasStudent = false;
        
        for(var i = 0; i < dataParse.length; i++) {
            if (req.params.id == dataParse[i].id) {
                hasStudent = dataParse[i];
            }
        }

        if (hasStudent) {
            res.send(JSON.parse(hasStudent));
        } else {
            res.send("Không tìm được học sinh có mã tương ứng");
        }
    });
});


//Add student in list
studentRouter.post('/', (req, res)=>{
    fs.readFile(path.resolve('./', 'student-list.json'), 'utf8', function(err,data) {
        if (err) return;
        var dataParse = JSON.parse(data);
        dataParse.push(req.body);
    
        fs.writeFile('student-list.json', JSON.stringify(dataParse), (err) => {
            if (err) { 
                console.log(err); 
                return; 
            };
            console.log("Update file successfully!");
        });
    });
});

//Update student in list
studentRouter.post('/updateById', (req, res)=>{
    console.log(req.body.id);
    fs.readFile(path.resolve('./', 'student-list.json'), 'utf8', function(err,data) {
        if (err) return;
        var dataParse = JSON.parse(data);
        
        for(var i = 0; i < dataParse.length; i++) {
            if (req.body.id == dataParse[i].id) {
                dataParse[i] = req.body;
            }
        }
    
        fs.writeFile('student-list.json', JSON.stringify(dataParse), (err) => {
            if (err) return;
            console.log("Update studentg information successfully!");
        });
    });
});

//Delete students success
studentRouter.delete('/deleteById', (req, res)=>{
    fs.readFile(path.resolve('./', 'student-list.json'), 'utf8', function(err,data) {
        var dataParse = JSON.parse(data);
        
        for(var i = 0; i < dataParse.length; i++) {
            if (req.body.id == dataParse[i].id) {
                dataParse.splice(i,1);
            }
        }
    
        fs.writeFile('student-list.json', JSON.stringify(dataParse), (err) => {
            if (err) return; 
            console.log("Delete students success");
        });
    });
});

studentRouter.put('/', (req, res)=>{
    res.send('edit student')
});

module.exports = studentRouter