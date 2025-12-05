// Day 1 Puzzle 1
import { readInput } from "../../utils.js";

const input = readInput();
const rows = input.split("\n");

let value = 50;
let atZero = 0;

for (const row of rows) {
  const [rotation] = row.trim().split(/\s+/);
  const rot_type = rotation[0];
  const rot_value = parseInt(rotation.slice(1)) % 100;

  // L = subtract, R = add
  value = value + (rot_type === "L" ? -rot_value : rot_value);

  if (value < 0) value = 100 + value;
  if (value >= 100) value = value - 100;

  if (value == 0) {
    atZero++;
  }
}

console.log("# Pointing at Zero: " + atZero);
