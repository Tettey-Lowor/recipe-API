import { Router } from "express";
import { addRecipe, deleteRecipes, getRecipe, getRecipes, updateRecipes } from "../controllers/recipes.controller.js";
import multer from "multer";

// configure upload middleware
const upload = multer({dest: 'uploads/images'});
// create recipes router
export const router = Router();

router.post("/", upload.single('image'),  addRecipe);

router.get("/", getRecipes);

router.get("/:id", getRecipe );

router.patch('/:id', updateRecipes );

router.delete('/:id', deleteRecipes);

