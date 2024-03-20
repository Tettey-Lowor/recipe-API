import { RecipeModel } from "../models/recipe.js";

export const addRecipe = async(req, res) => {
    // add Recipe to the database
    const createResult = await RecipeModel.create(req.body);
    // Return response 
    res.json(createResult);

}
export const getRecipes = (req, res) => {
    res.send('get all recipe')
  }
  export const getRecipe = (req, res) => {
    res.send('get single recipes')
  }
export const updateRecipes = (req, res) => {
    res.send ('update recipe')
}
export const deleteRecipes =  (req, res) => {
    res.send ('delete recipe')
}