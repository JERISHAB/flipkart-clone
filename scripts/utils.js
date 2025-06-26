import { renderProductsDesktop1, renderProductsMobile1 } from "./render.js";
import { discountFilter, ramFilter, ratingFilter } from "./filters.js";


export function applyFilters1(originalArray) {
      
    const checked = document.querySelectorAll("input[type=checkbox]:checked");
    let filterMap = {};

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

            ramMatch = ramFilter(ramMatch,ram, selectedValues);

        //   for (let val of selectedValues) {
        //     if (val === "below1" && ram <= 1) {
        //       ramMatch = true;
        //     } else if (val === "above8" && ram >= 8) {
        //       ramMatch = true;
        //     } else if (val === "above6" && ram > 6) {
        //       ramMatch = true;
        //     } else if (parseInt(val) === ram) {
        //       ramMatch = true;
        //     }
        //   }

          if (!ramMatch) {
            match = false;
            break;
          }
        } else if (key === "rating") {
          const rating = parseFloat(item.rating);
          let ratingMatch = false;

        //   for (let val of selectedValues) {
        //     if (val === "4" && rating >= 4) {
        //       ratingMatch = true;
        //     } else if (val === "3" && rating >= 3) {
        //       ratingMatch = true;
        //     }
            //   }
            
            ratingMatch = ratingFilter(ratingMatch,rating, selectedValues);
          if (!ratingMatch) {
            match = false;
            break;
          }
        } else if (key === "discount_percent") {
          const discount_percent = parseFloat(item.discount_percent);
          console.log(discount_percent);
          let discountMatch = false;

        //   for (let val of selectedValues) {
        //     if (val === "50" && discount_percent >= 50) {
        //       discountMatch = true;
        //     } else if (val === "40" && discount_percent >= 40) {
        //       discountMatch = true;
        //     } else if (val === "30" && discount_percent >= 30) {
        //       discountMatch = true;
        //     } else if (val === "20" && discount_percent >= 20) {
        //       discountMatch = true;
        //     } else if (val === "10" && discount_percent >= 10) {
        //       discountMatch = true;
        //     }
            //   }
            discountMatch = discountFilter(discountMatch,discount_percent,selectedValues);
          if (!discountMatch) {
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
    renderProductsDesktop1(filteredArray);
    renderProductsMobile1(filteredArray);
}
