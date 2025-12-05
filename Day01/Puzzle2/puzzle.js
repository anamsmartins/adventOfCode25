// Day 1 Puzzle 2
import { readInput } from "../../utils.js";

const input = readInput();
const rows = input.split("\n");

let value = 50;
let atZero = 0;

for (const row of rows) {
  const [rotation] = row.trim().split(/\s+/);
  console.log("================================");
  console.log("Processing rotation " + rotation + " from value " + value);
  const rot_type = rotation[0];
  let rot_value = parseInt(rotation.slice(1));

  // Add extra rotations
  const numberOfRotations = parseInt(rot_value / 100);
  console.log("Adding # " + numberOfRotations + " rotations");
  atZero += numberOfRotations;
  rot_value = rot_value % 100;

  let initialValue = value;

  // L = subtract, R = add
  value = (value + (rot_type === "L" ? -rot_value : rot_value) + 100) % 100;

  console.log("New value: " + value);

  // If pointing at zero
  if (value == 0) atZero++;

  // If crossed zero
  if (initialValue != 0 && value != 0) {
    if ((rot_type === "L") & (initialValue < value)) {
      console.log("Crossed zero rotation L: " + initialValue + " < " + value);
      atZero++;
    }

    if ((rot_type === "R") & (initialValue > value)) {
      console.log("Crossed zero rotation R: " + initialValue + " > " + value);
      atZero++;
    }
  }

  console.log("# Pointing at Zero: " + atZero);
}

console.log("# Pointing at Zero: " + atZero);
