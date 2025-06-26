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
