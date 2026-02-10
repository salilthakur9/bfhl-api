import express from "express";
import {
  fibonacci,
  isPrime,
  hcf,
  lcm
} from "../utils/math.utils.js";

const router = express.Router();

router.post("/", (req, res) => {
  try {
    const body = req.body;

    // Fibonacci
    if (body.fibonacci !== undefined) {
      const data = fibonacci(body.fibonacci);
      return res.status(200).json({
        is_success: true,
        official_email: "yourname@chitkara.edu.in",
        data
      });
    }

    // Prime
    if (body.prime !== undefined) {
      const data = body.prime.filter(isPrime);
      return res.status(200).json({
        is_success: true,
        official_email: "yourname@chitkara.edu.in",
        data
      });
    }

    // HCF
    if (body.hcf !== undefined) {
      const data = hcf(body.hcf);
      return res.status(200).json({
        is_success: true,
        official_email: "yourname@chitkara.edu.in",
        data
      });
    }

    // LCM
    if (body.lcm !== undefined) {
      const data = lcm(body.lcm);
      return res.status(200).json({
        is_success: true,
        official_email: "yourname@chitkara.edu.in",
        data
      });
    }

    // Invalid key
    return res.status(400).json({
      is_success: false,
      official_email: "yourname@chitkara.edu.in",
      error: "Invalid request key"
    });

  } catch (err) {
    return res.status(400).json({
      is_success: false,
      official_email: "yourname@chitkara.edu.in",
      error: err.message
    });
  }
});

export default router;
