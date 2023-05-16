const mongoose=require('mongoose')
async function connectDb() {
    try {
      await mongoose.connect("mongodb+srv://thegamer213988:window100@cluster0.khgbak2.mongodb.net/test?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log("Database Connected Successfully!")
    } catch (error) {
      console.log(error)
    }
  }
  module.exports=connectDb;