import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    is_success: true,
    official_email: "salil0877.be23@chitkara.edu.in"
  });
});

export default router;
