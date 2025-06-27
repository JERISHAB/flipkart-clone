import { renderProductsDesktop, renderProductsMobile} from "./render.js";
import { applyFilters, readMore } from "./utils.js";

const fetchData = async () => {
  try {
    const res = await fetch("./data.json");
    const fetchData = await res.json();
    const originalArray = fetchData.products;

    const checkbox = document.querySelectorAll("input[type=checkbox]");

    renderProductsDesktop(originalArray);
    renderProductsMobile(originalArray);

    checkbox.forEach((cb) => {
      cb.addEventListener("change",() => applyFilters(originalArray));
      console.log("enteredd")
    });





  } catch (error) {
    console.log(error);
  }
};

fetchData();

// PRICE FILTER SLIDER

const minRange = document.getElementById("min-range");
const maxRange = document.getElementById("max-range");
const track = document.getElementById("slider-track");
const minSelect = document.getElementById("min-select");
const maxSelect = document.getElementById("max-select");

const prices = ["₹0", "₹10,000", "₹15,000", "₹20,000", "₹30,000", "₹30,000+"];

function updateTrack() {
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
      #ddd 0%,
      #ddd ${percentMin}%,
      #2196f3 ${percentMin}%,
      #2196f3 ${percentMax}%,
      #ddd ${percentMax}%,
      #ddd 100%)`;
  
  applyFilters()

  minSelect.value = min;
  maxSelect.value = max;
}

function syncSlidersFromDropdowns() {
  let min = parseInt(minSelect.value);
  let max = parseInt(maxSelect.value);
  if (max - min < 1) {
    max = min + 1;
    maxSelect.value = max;
  }
  minRange.value = min;
  maxRange.value = max;
  updateTrack();
}

minRange.addEventListener("input", updateTrack);
maxRange.addEventListener("input", updateTrack);
minSelect.addEventListener("change", syncSlidersFromDropdowns);
maxSelect.addEventListener("change", syncSlidersFromDropdowns);

document.getElementById("clear-btn").addEventListener("click", () => {
  minRange.value = 0;
  maxRange.value = 5;
  minSelect.value = 0;
  maxSelect.value = 5;
  updateTrack();
});

window.onload = updateTrack;

// Read more function
let btn = document.getElementById("readBtn");
btn.onclick = () => readMore () 
  
