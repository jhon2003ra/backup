const mongoose=require('mongoose');
const URI='mongodb+srv://jramirezv6:gastos@clustergastos.zwhvh8v.mongodb.net/?retryWrites=true&w=majority&appName=ClusterGastos';

mongoose.connect(URI)
.then(db=> console.log('Database connected'))
.catch(err => console.error(err));
module.exports=mongoose;
