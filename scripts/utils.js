import { renderProductsDesktop, renderProductsMobile } from "./render.js";
import { discountFilter, ramFilter, ratingFilter,sliderFilter} from "./filters.js";

export function applyFilters(originalArray) {
  const checked = document.querySelectorAll("input[type=checkbox]:checked");

  const minRange = document.getElementById("min-range");
  const maxRange = document.getElementById("max-range");
  
  let filterMap = {};

  // for slider
  if (!filterMap["slider"]) {
    filterMap["slider"] = [];
  }
  filterMap["slider"].push(minRange.value,maxRange.value);

  checked.forEach((cb) => {
    const name = cb.getAttribute("filterName");
    const value = cb.value;

    if (!filterMap[name]) {
      filterMap[name] = [];
    }

    filterMap[name].push(value);
  });

  const filteredArray = [];

  for (let i = 0; i < originalArray.length; i++) {
    const item = originalArray[i];
    let match = true;

    for (let key in filterMap) {
      const selectedValues = filterMap[key];

      if (key === "ram") {
        const ram = parseInt(item.ram);
        let ramMatch = false;

        ramMatch = ramFilter(ramMatch, ram, selectedValues);

        if (!ramMatch) {
          match = false;
          break;
        }
      } else if (key === "rating") {
        const rating = parseFloat(item.rating);
        let ratingMatch = false;

        ratingMatch = ratingFilter(ratingMatch, rating, selectedValues);
        if (!ratingMatch) {
          match = false;
          break;
        }
      } else if (key === "discount_percent") {
        const discount_percent = parseFloat(item.discount_percent);
        console.log(discount_percent);
        let discountMatch = false;

        discountMatch = discountFilter(
          discountMatch,
          discount_percent,
          selectedValues
        );
        if (!discountMatch) {
          match = false;
          break;
        }
      } else if (key==="slider") { 
        const price = parseFloat(item.price)
        let sliderMatch = false;
        sliderMatch = sliderFilter(sliderMatch, price, selectedValues)
        if (!sliderMatch) {
          match = false;
          break;
        }
      } else {
        if (!selectedValues.includes(item[key])) {
          match = false;
          break;
        }
      }
    }

    if (match) {
      filteredArray.push(item);
    }
  }
  renderProductsDesktop(filteredArray);
  renderProductsMobile(filteredArray);
}

export function readMore() {
  let btn = document.getElementById("readBtn");
  let para = document.getElementById("browse-para");
  let mobList = document.getElementById("mobile-list");
  if (para.style.overflow != "visible") {
    para.style.overflow = "visible";
    para.style.lineHeight = "16px";
    para.style.maxHeight = "fit-content";
    para.style.webkitLineClamp = "0";

    mobList.style.overflow = "visible";
    mobList.style.lineHeight = "16px";
    mobList.style.maxHeight = "fit-content";
    mobList.style.webkitLineClamp = "0";

    btn.innerHTML = "Read less";
  } else {
    para.style.overflow = "hidden";
    para.style.lineHeight = "10px";
    para.style.maxHeight = "10px";
    para.style.webkitLineClamp = "1";

    mobList.style.overflow = "hidden";
    mobList.style.lineHeight = "16px";
    mobList.style.maxHeight = "16px";
    mobList.style.webkitLineClamp = "1";

    btn.innerHTML = "Read more";
  }
}



export function setPrice(originalArray) {
  originalArray.forEach(product => {
    product["price"] = Math.floor(product.original_price * ((100 - product.discount_percent) / 100));
  });
 return originalArray
}