import express from "express";
import { fibonacci } from "../utils/math.utils.js";
const router = express.Router();

router.post("/", (req, res) => {
  try {
    if (req.body.fibonacci !== undefined) {
      const data = fibonacci(req.body.fibonacci);
      return res.status(200).json({
        is_success: true,
        official_email: "yourname@chitkara.edu.in",
        data
      });
    }

    return res.status(400).json({
      is_success: false,
      official_email: "yourname@chitkara.edu.in",
      error: "Invalid request"
    });

  } catch (err) {
    res.status(400).json({
      is_success: false,
      official_email: "yourname@chitkara.edu.in",
      error: err.message
    });
  }
});

export default router;
