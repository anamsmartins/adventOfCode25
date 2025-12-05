// Day 2 Puzzle 1
import { readInput } from "../../utils.js";

const input = readInput();
const product_ids = input.split(",");

let invalidIDsSum = 0;

function isIDInvalid(id) {
  const idStr = id.toString();
  const length = idStr.length;

  if (length % 2 != 0) {
    return false;
  }

  const mid = length / 2;
  const firstHalf = idStr.slice(0, mid);
  const secondHalf = idStr.slice(mid);

  return firstHalf === secondHalf;
}

for (let product_id of product_ids) {
  product_id = product_id.trim().split(/\s+/);
  console.log("================================");
  console.log("Processing ID: " + product_id);
  let id_parts = product_id[0].split("-");
  let start_id = parseInt(id_parts[0]);
  let end_id = parseInt(id_parts[1]);

  for (let id = start_id; id <= end_id; id++) {
    if (isIDInvalid(id)) {
      console.log("Invalid ID: " + id);
      invalidIDsSum += id;
    }
  }
}

console.log("Sum of invalid IDs: " + invalidIDsSum);
