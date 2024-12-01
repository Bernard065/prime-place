import express from 'express';

const postRouter = express.Router();

postRouter.get("/test", (req, res) => {
    console.log("Testing")
})

export default postRouter;