import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Initial Route Works");
});

export { router };
