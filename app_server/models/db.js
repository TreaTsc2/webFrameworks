const mongoose = require('mongoose');
const dbURI = "mongodb+srv://treatsc2:<db_password>@cluster0.mc4ew.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

try {
   
mongoose.connect(
    dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => {console.log(" Mongoose is connected")},
	err=> {console.log(err)}
	);
}
 catch (e) {
  console.log("could not connect");
}//require('./locations');
