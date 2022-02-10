require("dotenv/config");

const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = `mongodb+srv://${process.env.MG_USERNAME}:${process.env.MG_PWD}@cluster0.jwj71.mongodb.net/recipe-app?retryWrites=true&w=majority`;

// Connection to the database "recipe-app"

mongoose
  .connect(MONGODB_URI)
 /* .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  //ITERATION 2
  .then(() => {
    Recipe.create(
    {"title": "Asian Glazed Chicken Thighs",
    "level": "Amateur Chef",
    "ingredients": [
      "1/2 cup rice vinegar",
      "5 tablespoons honey",
      "1/3 cup soy sauce (such as Silver Swan®)",
      "1/4 cup Asian (toasted) sesame oil",
      "3 tablespoons Asian chili garlic sauce",
      "3 tablespoons minced garlic",
      "salt to taste",
      "8 skinless, boneless chicken thighs"
    ],
    "cuisine": "Asian",
    "dishType": "main_course",
    "image": "https://images.media-allrecipes.com/userphotos/720x405/815964.jpg",
    "duration": 40,
    "creator": "Chef LePapu"}
    )
  })
   
  //ITERATION 3
   Recipe.insertMany(data) 
 
  //ITERATION 4
  .then( ()=>{ 
   Recipe.findOneAndUpdate(
     {title: {$eq:"Rigatoni alla Genovese"}},
     {$set: {duration: 100}},
     {new: true})
     .then(res=> console.log(res))
     console.log("recipe updated!")
    }) */

  //ITERATION 5
  .then( ()=>{ 
    Recipe.deleteOne(
     {title: {$eq:"Carrot Cake"}})
     .then(res=> console.log(res))
     console.log("recipe removed!")
    })


  .catch(error => {
    console.error('Error connecting to the database', error);
  });

  

  

