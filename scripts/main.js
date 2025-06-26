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


// const rangevalue = document.querySelector(".slider-display");
// const rangeInputvalue = document.querySelectorAll(".min-max-slider input")

// let priceGap = 500;

// const priceInputvalue = document.querySelectorAll(".min-max-text input")
// for (let i = 0; i < priceInputvalue.length; i++){
//   priceInputvalue[i].addEventListener("input", e => {

//     let minp = parseInt(priceInputvalue[0].value)
//     let maxp = parseInt(priceInputvalue[1].value)
//     let diff = maxp - minp;

//     if (minp < 0) {
//       priceInputvalue[0].value = 0;
//       minp = 0;
//     }

//     if (maxp > 10000) {
//       priceInputvalue[1].value = 0;
//       maxp = 10000
//     }

//     if (minp > maxp - priceGap) {
//       priceInputvalue[0].value = maxp - priceGap;
//       minp = maxp - priceGap

//       if (minp < 0) {
//         priceInputvalue[0].value = 0;
//         minp = 0;
//       }

//       if (diff >= priceGap && priceGap && maxp <= rangeInputvalue[1].max) {
//         if (e.target.className === "min-input") {
//           rangeInputvalue[0].value = minp;
//           let value1 = rangeInputvalue[0].max;
//           rangevalue.style.left = `${(minp / value1) * 100}%`;
//         }
//         else {
//           rangeInputvalue[1].value = maxp;
//           let value2 = rangeInputvalue[1].max;
//           rangevalue.style.right = `${100 - (maxp / value2) * 100}%`;
//         }
//       }
//     }
//   })

//   for (let i = 0; i < rangeInputvalue.length; i++){
//     rangeInputvalue[i].addEventListener("input", e => {
//       let minVal = parseInt(rangeInputvalue[0].value)
//       let maxVal = parseInt(rangeInputvalue[1].value)

//       let diff = maxVal

//       if (diff < priceGap) {
//         if (e.target.className === "min-range") {
//           rangeInputvalue[0].value = maxVal - priceGap
//         } else {
//           rangeInputvalue[1].value = minVal + priceGap;
//         }
//       } else {
//         priceInputvalue[0].value = minVal;
//         priceInputvalue[1].value = maxVal;
//         rangevalue.style.left = `${(minVal / rangeInputvalue[0].max) * 100}%`;
//         rangevalue.style.right = `${(maxVal / rangeInputvalue[1].max) * 100}%`;
//       }
//     })
//   }


//}


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
  
