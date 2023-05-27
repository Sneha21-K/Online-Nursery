const mongoose = require('mongoose');


const DB= process.env.DATABASE;

const PORT=process.env.PORT;
mongoose.connect(DB).then(() => {
console.log('connection successfull');
}).catch((err)=> console.log('no connection'));
