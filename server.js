const express =require('express');
const bodyParser = require('body-parser');

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
   useNewUrlParser:true
}).then(() => {
   console.log("Successfully ocnnected to database");
}).catch(err =>{
   console.log('Could not connect to database. Exiting now...',err);
   process.exit();
});


const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get('/',(req,res)=>{ 
   res.json({"message":"Welcome to Application."});
});

require('./app/routes/note.routes.js')(app);

app.listen(3000,() => {
  console.log("server is listening on port 3000");
});

