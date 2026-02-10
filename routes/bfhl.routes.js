import express from "express";
import { validateBFHLRequest } from "../validations/bfhl.validation.js";
import {
  fibonacci,
  isPrime,
  hcf,
  lcm
} from "../utils/math.utils.js";

const router = express.Router();

router.post("/", (req, res) => {
  try {
    const error = validateBFHLRequest(req.body);

    if (error) {
      return res.status(400).json({
        is_success: false,
        official_email: "yourname@chitkara.edu.in",
        error
      });
    }

    const key = Object.keys(req.body)[0];
    const value = req.body[key];

    let data;

    if (key === "fibonacci") data = fibonacci(value);
    if (key === "prime") data = value.filter(isPrime);
    if (key === "hcf") data = hcf(value);
    if (key === "lcm") data = lcm(value);

    return res.status(200).json({
      is_success: true,
      official_email: "yourname@chitkara.edu.in",
      data
    });

  } catch (err) {
    return res.status(500).json({
      is_success: false,
      official_email: "yourname@chitkara.edu.in",
      error: "Internal server error"
    });
  }
});

export default router;
