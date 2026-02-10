export const fibonacci = (n) => {
  if (typeof n !== "number" || n < 0) {
    throw new Error("Invalid fibonacci input");
  }

  const result = [];
  let a = 0, b = 1;

  for (let i = 0; i < n; i++) {
    result.push(a);
    [a, b] = [b, a + b];
  }
  return result;
};

export const isPrime = (n) => {
  if (typeof n !== "number" || n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

export const hcf = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Invalid HCF input");
  }
  return arr.reduce((acc, val) => gcd(acc, val));
};

export const lcm = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Invalid LCM input");
  }

  return arr.reduce((acc, val) => (acc * val) / gcd(acc, val));
};
