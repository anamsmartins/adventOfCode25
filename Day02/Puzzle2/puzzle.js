// Day 2 Puzzle 1
import { readInput } from "../../utils.js";

const input = readInput();
const product_ids = input.split(",");

let invalidIDsSum = 0;

function isIDInvalid(id) {
  const idStr = id.toString();
  const idLength = idStr.length;

  for (let mid = 2; mid <= idLength; mid++) {
    // If not evenly divisible, skip
    if (idLength % mid != 0) {
      continue;
    }

    const segmentLength = idLength / mid;
    let allSegmentsEqual = true;

    const segment = idStr.slice(0, segmentLength);
    for (let i = 1; i < mid; i++) {
      const currentSegment = idStr.slice(
        i * segmentLength,
        (i + 1) * segmentLength
      );
      if (currentSegment !== segment) {
        allSegmentsEqual = false;
        break;
      }
    }

    if (allSegmentsEqual) {
      return true;
    }
  }

  return false;
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
