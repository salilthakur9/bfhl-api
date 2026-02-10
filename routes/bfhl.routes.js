import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  res.status(200).json({
    is_success: true,
    official_email: "salil0877.be23@chitkara.edu.in",
    data: null
  });
});

export default router;
