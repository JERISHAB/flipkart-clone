import { filterSelect } from "./filters.js";
import { applyFilters } from "./utils.js";

export function updateTrack1(
  minRange,
  maxRange,
  track,
  originalArray,
  minSelect,
  maxSelect
) {
  let min = parseInt(minRange.value);
  let max = parseInt(maxRange.value);

  if (max - min < 1) {
    if (minRange === document.activeElement) {
      minRange.value = max - 1;
      min = max - 1;
    } else {
      maxRange.value = min + 1;
      max = min + 1;
    }
  }

  const percentMin = (min / 5) * 100;
  const percentMax = (max / 5) * 100;

  track.style.background = `
    linear-gradient(to right,
     #b1b1b1  0%,
      #b1b1b1  ${percentMin}%,
      #2196f3 ${percentMin}%,
      #2196f3 ${percentMax}%,
     #b1b1b1  ${percentMax}%,
     #b1b1b1 100%)`;

  applyFilters(originalArray);



  minSelect.value = min;
  maxSelect.value = max;

  filterSelect(minSelect, maxSelect, min, max);
}

export function syncSlidersFromDropdowns1(
  minRange,
  maxRange,
  minSelect,
  maxSelect,
  track,
  originalArray
) {
  let min = parseInt(minSelect.value);
  let max = parseInt(maxSelect.value);
  if (max - min < 1) {
    max = min + 1;
    maxSelect.value = max;
  }
  minRange.value = min;
  maxRange.value = max;
  updateTrack1(minRange,
  maxRange,
  track,
  originalArray,
  minSelect,
  maxSelect);
}


