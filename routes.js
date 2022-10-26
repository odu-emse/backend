import { Router } from "express";

const api = Router();

api.get("/", async (req, res) => {
    res.json({ "status": "Hello World" })
});

export default api;