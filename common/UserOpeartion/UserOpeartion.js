var dateformat = require('dateformat');
var UserData = require('../../data/UserData');
var UserOperation = function(){

};

// 1 get User deatils and related todos
UserOperation.getUsers = function(req,cb){
    var userId = req.params.id;
    for(var i in UserData){
        if(userId === UserData[i].id){
            var data = {};
            var user = {};
            var toDo = {};
            user.id = UserData[i].id;
            user.fName = UserData[i].fName;
            user.lName = UserData[i].lName;
            user.email = UserData[i].email;
            user.pinCode = UserData[i].pinCode;
            user.birthDate = UserData[i].birthDate;
            user.isActive = UserData[i].isActive;
            
            toDo.id = UserData[i].toDos.id;
            toDo.userId= UserData[i].toDos.userId;
            toDo.text= UserData[i].toDos.text;
            toDo.done= UserData[i].toDos.done;
            toDo.targetDate= UserData[i].toDos.targetDate;

            data.user = user;
            data.toDo = toDo;
        }
    }
    cb(null,data);
}

// 2 get specific todos
UserOperation.getToDos = function(req,cb){
    var toDoId = req.params.id;
    for(var i in UserData){
        if(toDoId === UserData[i].toDos.id){
            var data = {};
            var toDo = {};
           
            toDo.id = UserData[i].toDos.id;
            toDo.userId= UserData[i].toDos.userId;
            toDo.text= UserData[i].toDos.text;
            toDo.done= UserData[i].toDos.done;
            toDo.targetDate= UserData[i].toDos.targetDate;

            data.toDo = toDo;
        }
    }
    cb(null,data);
}

// 3 get all active users
UserOperation.getActiveUsers = function(req,cb){
    var dataArray = [];
    for(var i in UserData){
        if(UserData[i].isActive === true){
            var data = {};
            var user = {};
            var toDo = {};
            user.id = UserData[i].id;
            user.fName = UserData[i].fName;
            user.lName = UserData[i].lName;
            user.email = UserData[i].email;
            user.pinCode = UserData[i].pinCode;
            user.birthDate = UserData[i].birthDate;
            user.isActive = UserData[i].isActive;
            
            toDo.id = UserData[i].toDos.id;
            toDo.userId= UserData[i].toDos.userId;
            toDo.text= UserData[i].toDos.text;
            toDo.done= UserData[i].toDos.done;
            toDo.targetDate= UserData[i].toDos.targetDate;

            data.user = user;
            data.toDo = toDo;
            dataArray.push(data);
        }

    }
    cb(null,dataArray);
}

// 4 get active todos which has targetDate as today and tommorow
UserOperation.getByDate = function(req,cb){
    var dataArray = [];
    var today= dateformat(new Date(), 'dd-mmm-yyyy');
    var tommorow= dateformat(new Date(new Date().getTime() + 24*60*60*1000), 'dd-mmm-yyyy');
   console.log('today '+today);
   console.log('tommorow '+tommorow);
    for(var i in UserData){
        if(UserData[i].isActive === true && (UserData[i].toDos.targetDate === today ||
        UserData[i].toDos.targetDate ===tommorow )){
            var data = {};
            var toDo = {};
           
            toDo.id = UserData[i].toDos.id;
            toDo.userId= UserData[i].toDos.userId;
            toDo.text= UserData[i].toDos.text;
            toDo.done= UserData[i].toDos.done;
            toDo.targetDate= UserData[i].toDos.targetDate;

            data.toDo = toDo;
            dataArray.push(data);
        }
    }
    cb(null,dataArray);
}
exports.UserOperation = UserOperation;