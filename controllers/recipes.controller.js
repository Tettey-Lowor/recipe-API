import { RecipeModel } from "../models/recipe.js";

export const addRecipe = async(req, res, next) => {
   try {
     // add Recipe to the database
     const createResult = await RecipeModel.create(req.body);
     // Return response 
     res.json(createResult)
 
   } catch (error) {
    // forward to express error handler
    next(error)
   }
}
export const getRecipes = async(req, res,next) => {
  try {
    const getAllRecipes = await RecipeModel.find({});
      res.status(200).json(getAllRecipes);
  } catch (error) {
    next(error);
    
  }
  }
  export const getRecipe = async (req, res, next) => {
   try {
    console.log('ybybybybyh')
     const getOneRecipe = await RecipeModel.findById(req.params.id);
     res.json({getOneRecipe});
   } catch (error) {
    next(error);





















































































































































    
   }
  }

export const updateRecipes = (req, res) => {
    res.send ('update recipe')
}
export const deleteRecipes =  (req, res) => {
    res.send ('delete recipe')
}