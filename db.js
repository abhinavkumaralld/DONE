const mongoose = require("mongoose");
const dburl =
  "mongodb+srv://abhikumar:abhimongo@cluster0.dbyc8el.mongodb.net/dbname?retryWrites=true&w=majority";

const connectmongo = () => {
  mongoose
    .connect(dburl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connection successful..");
    })
    .catch((err) => console.log(err));
};
module.exports = connectmongo;
