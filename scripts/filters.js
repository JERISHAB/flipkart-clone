export function ramFilter(ramMatch,ram, selectedValues) {

  for (let val of selectedValues) {
    if (val === "below1" && ram <= 1) {
      ramMatch = true;
    } else if (val === "above8" && ram >= 8) {
      ramMatch = true;
    } else if (val === "above6" && ram > 6) {
      ramMatch = true;
    } else if (parseInt(val) === ram) {
      ramMatch = true;
    }
  }
  return ramMatch;
}

export function ratingFilter(ratingMatch,rating, selectedValues) {

  for (let val of selectedValues) {
    if (val === "4" && rating >= 4) {
      ratingMatch = true;
    } else if (val === "3" && rating >= 3) {
      ratingMatch = true;
    }
  }
  return ratingMatch;
}

export function discountFilter(discountMatch,discount_percent, selectedValues) {
  for (let val of selectedValues) {
    if (val === "50" && discount_percent >= 50) {
      discountMatch = true;
    } else if (val === "40" && discount_percent >= 40) {
      discountMatch = true;
    } else if (val === "30" && discount_percent >= 30) {
      discountMatch = true;
    } else if (val === "20" && discount_percent >= 20) {
      discountMatch = true;
    } else if (val === "10" && discount_percent >= 10) {
      discountMatch = true;
    }
    }
    return discountMatch
}

export function sliderFilter(sliderMatch, price, selectedValues) {
  const prices = [0, 10000, 15000, 20000, 30000, 30000];

  if ((selectedValues[1] === "5") && (price >= prices[selectedValues[0]])) {
    sliderMatch = true;
  }
  else if (price >= prices[selectedValues[0]] && price <= prices[selectedValues[1]]) {
    sliderMatch = true;
    
  }
  return sliderMatch;
}

export function filterSelect(minSelect, maxSelect, min, max) {
  for (let i = 0; i < minSelect.options.length; i++){
    if (minSelect.options[i].value >= max)
      minSelect.options[i].style.display = "none"
    else
    minSelect.options[i].style.display = "block";
  }
  for (let i = 0; i < maxSelect.options.length; i++){
    if (maxSelect.options[i].value <= min)
      maxSelect.options[i].style.display = "none"
    else
    maxSelect.options[i].style.display = "block";

  }
}



export function mobilePriceFilter(priceMatch, price, selectedValues) {
  for (let val of selectedValues) {
    if (val === "below10000" && price <= 10000) {
      priceMatch = true;
    } else if (val === "10000-15000" && price > 10000 && price <= 15000) {
      priceMatch = true;
    } else if (val === "15000-20000" && price > 15000 && price <= 20000) {
      priceMatch = true;
    } else if (val === "20000-30000" && price > 20000 && price <= 30000) {
      priceMatch = true;
    } else if (val === "above30000" && price > 30000) {
      priceMatch = true;
    }
  }
  return priceMatch;
}


