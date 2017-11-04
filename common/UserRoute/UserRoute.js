var app = require('express')();
var UserOperation = require('../UserOpeartion/UserOpeartion').UserOperation;

module.exports = function(app){

//1 get User deatils and related todos
app.get('/getusers/:id',function(req,res){
    UserOperation.getUsers(req,function(err,data){
        if(err){
            console.log('This is Error'+err);
        }
        else{
            console.log('This is success');
            res.send(JSON.stringify(data));
        }
    });

});    

//2 get specific todos
app.get('/getToDos/:id',function(req,res){
    UserOperation.getToDos(req,function(err,data){
        if(err){
            console.log('This is Error'+err);
        }
        else{
            console.log('This is success');
            res.send(JSON.stringify(data));
        }
    });

});

//3 get all active users
app.get('/getActiveUsers',function(req,res){
    UserOperation.getActiveUsers(req,function(err,data){
        if(err){
            console.log('This is Error'+err);
        }
        else{
            console.log('This is success');
            res.send(JSON.stringify(data));
        }
    });

});

//4 get active todos which has targetDate as today and tommorow
app.get('/getByDate',function(req,res){
    UserOperation.getByDate(req,function(err,data){
        if(err){
            console.log('This is Error'+err);
        }
        else{
            console.log('This is success');
            res.send(JSON.stringify(data));
        }
    });

});

}