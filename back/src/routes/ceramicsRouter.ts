import express from "express";
import * as ceramicsServices from "../services/ceramicsServices";

const router = express.Router();

router.get("/",(_req, res)=>{
    res.send(ceramicsServices.getCeramics())
})

router.get("/:id", (req, res) => {
    const ceramic = ceramicsServices.getCeramicById(Number(req.params.id));
    
    return ceramic !== undefined
        ? res.send(ceramic) 
        : res.sendStatus(404);

})

router.post("/", (req, res) => {

    
    const { name, description, price, stock, category, use, color, size, imageUrl} = req.body;

    const newCeramic = ceramicsServices.addCeramic({name, description, price, stock, category, use, color, size, imageUrl});

    res.json(newCeramic)
})

export default router