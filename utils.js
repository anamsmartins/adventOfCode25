import { readFileSync } from "fs";

// === Input function ===
const inputPath = "input.txt";
export function readInput() {
  return readFileSync(inputPath, "utf8");
}

// === Array functions ===
export function occurInArray(array, value) {
  var total = 0;
  array.forEach((element) => {
    if (element == value) {
      total++;
    }
  });
  return total;
}
