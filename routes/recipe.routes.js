import { Router } from "express";
import { addRecipe, deleteRecipes, getRecipe, getRecipes, updateRecipes } from "../controllers/recipes.controller.js";

export const router = Router();

router.post("", addRecipe);

router.get("", getRecipes);

router.get("/:id", getRecipe );

router.patch('/:id', updateRecipes );

router.delete('/:id', deleteRecipes);

