const allowedKeys = ["fibonacci", "prime", "hcf", "lcm", "AI"];

export const validateBFHLRequest = (body) => {
  if (!body || typeof body !== "object") {
    return "Request body must be a JSON object";
  }

  const keys = Object.keys(body);

  if (keys.length === 0) {
    return "Request body cannot be empty";
  }

  if (keys.length !== 1) {
    return "Exactly one key is required";
  }

  const key = keys[0];

  if (!allowedKeys.includes(key)) {
    return "Invalid request key";
  }

  
  if (key === "fibonacci" && typeof body[key] !== "number") {
    return "Fibonacci value must be a number";
  }

  if ((key === "prime" || key === "hcf" || key === "lcm") && !Array.isArray(body[key])) {
    return `${key} must be an array of numbers`;
  }

  if (key === "AI" && typeof body[key] !== "string") {
    return "AI input must be a string";
  }

  return null;
};
