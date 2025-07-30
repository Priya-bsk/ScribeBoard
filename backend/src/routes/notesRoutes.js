import express from "express";
import {getAllNotes,updateNote,deleteNote} from "../controllers/notesController.js";
import {createNote,getNoteById} from "../controllers/notesController.js"
const router=express.Router();



//This one is a controller
router.get("/",getAllNotes);
router.get("/:id",getNoteById);

router.post("/",createNote); //This one is another controller
router.put("/:id",updateNote);
router.delete("/:id",deleteNote);

export default router;