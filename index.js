const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json())
const product = require("./models/product.model.js");
const productRoute = require('./routes/product.route.js')

//middleware
app.use(express.urlencoded({ extended: false }));


//routes
app.use("/api/products", productRoute)





app.get('/', (req, res) => {
  res.send("Hello  node");
});


app.listen(3000, () => {

  console.log("godoos")
});
mongoose.connect("mongodb+srv://amanrembersu13:EVsK3tQzvxtUmSTH@cluster.tiwzcz5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster")
  .then(() => {
    console.log("connected")
  })

  .catch(() => {
    console.log("error")
  })
