import { renderProductsDesktop, renderProductsMobile } from "./render.js";
import { applyFilters, readMore, setPrice } from "./utils.js";
import { updateTrack1, syncSlidersFromDropdowns1 } from "./changeCss.js";
const fetchData = async () => {
  try {
    const res = await fetch("./data.json");
    const fetchData = await res.json();
    const originalArray = setPrice(fetchData.products);

    const checkbox = document.querySelectorAll("input[type=checkbox]");

    renderProductsDesktop(originalArray);
    renderProductsMobile(originalArray);
    console.log("rendering in main")

    checkbox.forEach((cb) => {
      cb.addEventListener("change", () => applyFilters(originalArray));
      console.log("enteredd");
    });

    // PRICE FILTER SLIDER

    const minRange = document.getElementById("min-range");
    const maxRange = document.getElementById("max-range");
    const track = document.getElementById("slider-track");
    const minSelect = document.getElementById("min-select");
    const maxSelect = document.getElementById("max-select");

    minRange.addEventListener("input", () =>
      updateTrack1(
        minRange,
        maxRange,
        track,
        originalArray,
        minSelect,
        maxSelect
      )
    );
    maxRange.addEventListener("input", () =>
      updateTrack1(
        minRange,
        maxRange,
        track,
        originalArray,
        minSelect,
        maxSelect
      )
    );
    minSelect.addEventListener("change", () =>
      syncSlidersFromDropdowns1(
        minRange,
        maxRange,
        minSelect,
        maxSelect,
        track,
        originalArray
      )
    );
    maxSelect.addEventListener("change", () =>
      syncSlidersFromDropdowns1(
        minRange,
        maxRange,
        minSelect,
        maxSelect,
        track,
        originalArray
      )
    );

    document.getElementById("clear-btn-price").addEventListener("click", () => {
      minRange.value = 0;
      maxRange.value = 5;
      minSelect.value = 0;
      maxSelect.value = 5;
      updateTrack1(
        minRange,
        maxRange,
        track,
        originalArray,
        minSelect,
        maxSelect
      );
    });


  } catch (error) {
    console.log(error);
  }
};

fetchData();

// Read more function
let btn = document.getElementById("readBtn");
btn.onclick = () => readMore();
