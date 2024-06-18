# NodeCrudAppWithMongo
NodeJS RESTAPI Example with ExpressJS and MongoDB

## Step 1: Set up the Node.js application
**mkdir NodeCrudAppWithMongo**

**cd node-express-mongo-docker**

**npm init -y**

## Step 2: Install dependencies
**npm install express mongoose body-parser**
## Step 3: Project Structure
Create src/index.js, src/models.js, src/router.js

![image](https://github.com/nitin1982/NodeCrudAppWithMongo/assets/5372907/4c750bfa-a57b-48f2-8553-e6367828f462)

## Step 4: Create the Express server in src/index.js
> const express = require('express');
> 
> const mongoose = require('mongoose');
> 
> const bodyParser = require('body-parser');
> 
> const routes = require('./routes');
>
> 
> const app = express();
> 
> const PORT = process.env.PORT || 3000;
> 
> const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/mydatabase';
> 
> app.use(bodyParser.json());
> 
> app.use('/api', routes);
> 
> mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
> 
>    .then(() => console.log('MongoDB connected...'))
>
>    .catch(err => console.log(err));
> 
> app.listen(PORT, () => {
> 
>   console.log(`Server running on port ${PORT}`);
> 
> });

## Define the Mongoose models in src/models.js
> const mongoose = require('mongoose');
> 
> const ItemSchema = new mongoose.Schema({
> 
>    name: {
> 
>        type: String,
> 
>        required: true
> 
>    },
> 
>    quantity: {
> 
>        type: Number,
> 
>        required: true
> 
>    },
> 
>    price: {
> 
>        type: Number,
> 
>        required: true
> 
>    }
> 
> });
> 
> const Item = mongoose.model('Item', ItemSchema);
> 
> module.exports = Item;

