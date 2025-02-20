const { default: mongoose } = require("mongoose");

const connectdb = async() => {

try
{
  const conn = await mongoose.connect('mongodb+srv://sajedul007:sajedul@cluster2.ktrzx.mongodb.net/onedb?retryWrites=true&w=majority&appName=Cluster2',);

  console.log('MongoDb Connected');

}
catch(error)
{
 console.error(error);
 process.exit(1);
}
};
module.exports =  connectdb;
