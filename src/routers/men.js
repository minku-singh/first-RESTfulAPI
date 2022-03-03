const express = require("express");
const router = new express.Router();
const MensRanking = require("./../models/mens");

// to post, get, patch, delete in db, and the route should be constant for all
// the verbs due to REST architecture
router.post("/mens", async (req, res) => {
    try{
        const addMensRanking = new MensRanking(req.body);
        console.log(req.body);
        const insertMens = await addMensRanking.save();
        res.status(201).send(insertMens)
    }catch(e){
        res.status(400).send(e);
    }
});
router.get("/mens", async (req, res) => {
    try{
        const getMens = await MensRanking.find({}).sort({"ranking": 1});
        res.send(getMens)
    }catch(e){
        res.status(400).send(e);
    }
})
router.get("/mens/:id", async (req, res) => {
    const id = req.params.id;
    try{
        const getMens = await MensRanking.find({_id : id});
        res.send(getMens)
    }catch(e){
        res.status(400).send(e);
    }
})
router.patch("/mens/:id", async (req, res) => {
    const id = req.params.id;
    try{
        const getMens = await MensRanking.findByIdAndUpdate(id, req.body, {
            new: true
        });
        res.send(getMens)
    }catch(e){
        res.status(500).send(e);
    }
})
router.delete("/mens/:id", async (req, res) => {
    const id = req.params.id;
    try{
        const getMens = await MensRanking.findByIdAndDelete(id);
        res.send(getMens)
    }catch(e){
        res.status(500).send(e);
    }
})

module.exports = router;