var app = require('express')(app);
require('../common/UserRoute/UserRoute')(app);
app.listen(3000, function(){
console.log('server started ....');

});