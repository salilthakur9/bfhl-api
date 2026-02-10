import express from "express";
import {
  fibonacci,
  isPrime,
  hcf,
  lcm
} from "../utils/math.utils.js";
import { askGemini } from "../utils/gemini.js";
import { validateBFHLRequest } from "../validations/bfhl.validation.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const validationError = validateBFHLRequest(req.body);

    if (validationError) {
      return res.status(400).json({
        is_success: false,
        official_email: process.env.OFFICIAL_EMAIL,
        error: validationError
      });
    }

 
    const key = Object.keys(req.body)[0];
    const value = req.body[key];
    let data;


    switch (key) {
      case "fibonacci":
        data = fibonacci(value);
        break;

      case "prime":
        data = value.filter(isPrime);
        break;

      case "hcf":
        data = hcf(value);
        break;

      case "lcm":
        data = lcm(value);
        break;

      case "AI":
        data = await askGemini(value);
        break;

      default:
        return res.status(400).json({
          is_success: false,
          official_email: process.env.OFFICIAL_EMAIL,
          error: "Invalid request key"
        });
    }


    return res.status(200).json({
      is_success: true,
      official_email: process.env.OFFICIAL_EMAIL,
      data
    });

  } catch (error) {
    console.error("BFHL Error:", error.message);

  return res.status(500).json({
    is_success: false,
    official_email: process.env.OFFICIAL_EMAIL,
    error: error.message
    });
  }
});

export default router;
