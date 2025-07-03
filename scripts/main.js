import { renderProductsDesktop, renderProductsMobile,renderPaginationControls } from "./render.js";
import { applyFilters, readMore, setPrice, sortProducts } from "./utils.js";
import { updateTrack1, syncSlidersFromDropdowns1 } from "./changeCss.js";

let originalArray = [];
let currentFilteredArray = [];
let currentSortType = null;
let currentPage = 1;
const PRODUCTS_PER_PAGE = 10;

const fetchData = async () => {
  try {
    const res = await fetch("./data.json");
    const fetchData = await res.json();
    originalArray = setPrice(fetchData.products);
    currentFilteredArray = [...originalArray];

     setupSortEvents();
     renderAndSort(currentFilteredArray);

        
    // renderProductsDesktop(originalArray);
    // renderProductsMobile(originalArray);
    // console.log("rendering in main")

    // checkbox.forEach((cb) => {
    //   cb.addEventListener("change", () => applyFilters(originalArray));
    //   console.log("enteredd");
    // });
   
    const checkbox = document.querySelectorAll("input[type=checkbox]");
    checkbox.forEach((cb) => {
      cb.addEventListener("change", () => applyFilters(originalArray, updateFilteredAndRender));
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
        maxSelect,
        updateFilteredAndRender
      )
    );
    maxRange.addEventListener("input", () =>
      updateTrack1(
        minRange,
        maxRange,
        track,
        originalArray,
        minSelect,
        maxSelect,
        updateFilteredAndRender
      )
    );
    minSelect.addEventListener("change", () =>
      syncSlidersFromDropdowns1(
        minRange,
        maxRange,
        minSelect,
        maxSelect,
        track,
        originalArray,
        updateFilteredAndRender
      )
    );
    maxSelect.addEventListener("change", () =>
      syncSlidersFromDropdowns1(
        minRange,
        maxRange,
        minSelect,
        maxSelect,
        track,
        originalArray,
        updateFilteredAndRender
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
        maxSelect,
        updateFilteredAndRender
      );
    });
  } catch (error) {
    console.log(error);
  }
};


function renderAndSort(array) {
  const sortedArray = currentSortType
    ? sortProducts(array, currentSortType)
    : array;

  const totalPages = Math.ceil(sortedArray.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const paginatedProducts = sortedArray.slice(startIndex, endIndex);

  renderProductsDesktop(paginatedProducts);
  renderProductsMobile(paginatedProducts);

  renderPaginationControls(totalPages, currentPage, (newPage) => {
    currentPage = newPage;
    renderAndSort(currentFilteredArray);
  });
}

function updateFilteredAndRender(filteredArray) {
  currentPage = 1;
  currentFilteredArray = filteredArray;
  renderAndSort(currentFilteredArray);
}
 
function setupSortEvents() {
  const sortOptions = document.querySelectorAll(".sort-option");
  sortOptions.forEach((option) => {
    option.addEventListener("click", () => {
      sortOptions.forEach((o) => o.classList.remove("active"));
      option.classList.add("active");

      currentSortType = option.getAttribute("data-sort");
      currentPage = 1;
      renderAndSort(currentFilteredArray);
    });
  });
}

fetchData();

// Read more function
let btn = document.getElementById("readBtn");
btn.onclick = () => readMore();



const filterButton = document.querySelector(".mn-right");
const filterPanel = document.getElementById("m-filter-wrapper");
const backButton = document.querySelector(".m-back-btn");

filterButton.addEventListener("click", () => {
  filterPanel.classList.remove("m-filter-hidden");
  filterPanel.classList.add("m-filter-visible");
});

backButton.addEventListener("click", () => {
  filterPanel.classList.remove("m-filter-visible");
  filterPanel.classList.add("m-filter-hidden");
});
