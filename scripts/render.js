export function renderProductsDesktop(dataArray) {
  let html = "";

  dataArray.forEach((product) => {
    const {
      title,
      brand,
      price,
      original_price,
      discount_percent,
      ram,
      rom,
      display_size_cm,
      display_size_inches,
      camera_rear,
      battery_capacity_mah,
      warranty_device_years,
      warranty_accessories_months,
      rating,
      rating_count,
      exchange_offer,
      review_count,
      flipkart_assured,
      stock_units_left,
      offers,
      categories,
      image,
    } = product;

    html += `
      <div class="product-card">
          <div class="product-image-div">
              <img src="images/icons/heart-img.svg" class="heart-img" alt="">
              <img src="${image}" class="product-image" alt="I Kall K3310" />
          </div>
          <div class="product-info">
              <div class="product-details">
                  <h3 class="product-title">${title}</h3>
                  <div class="product-rating">
                      <span class="rating-box">${rating} <img src="images/icons/ratings-star.svg" class="rating-star-lap" alt=""></span>
                      <span class="rating-text">${rating_count} Ratings & ${review_count} Reviews</span>
                  </div>
                  <ul class="product-features">
                      <li><span class="device-prop"></span>${ram} MB RAM | ${rom} MB ROM</li>
                      <li><span class="device-prop"></span>${display_size_cm} cm (${display_size_inches} inch) Display</li>
                      <li><span class="device-prop"></span>${camera_rear} Rear Camera</li>
                      <li><span class="device-prop"></span>${battery_capacity_mah} mAh Battery</li>
                      <li><span class="device-prop"></span>${warranty_device_years} Year warranty for device and ${warranty_accessories_months} for box accessories</li>
                  </ul>
              </div>
              
              <div class="product-price-details">
              <div class="price-div">
                  <h2 class="price">₹${price}</h2>
                  <img src="images/logos/assured.png" class="assured-img-2">
              </div>    
                  <div class="original-price">
                      <span class="strike">₹${original_price}</span>
                      <span class="discount-price">${discount_percent}% off</span>
                  </div>
                  <img src="images/logos/assured.png" class="assured-img-3">
                  <p class="warranty-warning">1 year warranty by ${brand}</p>
                  <p class="exchange-text">Upto <span class="exchange-amount">₹${exchange_offer}</span> Off on Exchange</p>
                  <p class="bank-offer">${offers}</p>
              </div>

          </div>
            <label class="compare-box">
              <input type="checkbox">
              <span class="compare-text">Add to Compare</span>
            </label>
    </div>`;
  });
  document.getElementById("grid-sec").innerHTML = html;
}

export function renderProductsMobile(dataArray) {
  let html = "";

  dataArray.forEach((product) => {
    const {
      title,
      price,
      original_price,
      discount_percent,
      brand,
      rating,
      rating_count,
      flipkart_assured,
      offers,
      exchange_offer,
      battery_capacity_mah,
      warranty_device_years,
      warranty_accessories_months,
      display_size_cm,
      display_size_inches,
      ram,
      rom,
      camera_rear,
      image,
    } = product;

    html += `
      <div class="mcard">
        <div class="mcard-top">
          <img src="images/icons/mobile/m-heart.svg" class="m-heart" alt="">
          <img src="${image}" class="mimg" alt="${title}">
          <div class="minfo">
            <div class="mname">${title}</div>
            <div class="mrating">
              <img src="images/icons/mobile/mob-star.svg" class="mstar">
              <span class="mrate">(${rating_count})</span>
              <img src="images/logos/assured.png" class="massured">
            </div>
            <div class="mprice">
              <span class="mdiscount"><img src="images/icons/mobile/discount-arrow.svg"  class="discount-arrow" >${discount_percent}%</span>
              <span class="mstrike">₹${original_price}</span>
              <span class="msell">₹${price}</span>
            </div>
            <div class="mbank">
              <img src="images/icons/mobile/wow-img.svg" alt="wow-img" class="wow-img">
             <span class="serif" >₹9,499</span> with ${offers}
            </div>
            <div class="mexchange">   
              Upto <span class="serif" >₹${exchange_offer}</span> Off on Exchange
            </div>
            <div class="mwarranty">${warranty_device_years} year warranty by ${brand}</div>
          </div>
        </div>
        <div class="mfeatures">
          <div class="mfeature">${ram} GB RAM | ${rom} GB ROM</div>
          <div class="mfeature">${display_size_cm} cm (${display_size_inches} inch) Display</div>
          <div class="mfeature">${camera_rear} Rear Camera</div>
          <div class="mfeature">${battery_capacity_mah} mAh Battery</div>
          <div class="mfeature">${warranty_device_years} Year warranty for device and ${warranty_accessories_months} for box accessories</div>
        </div>
      </div>`;
  });

  document.getElementById("mobile-sec").innerHTML = html;
}

export function renderFilterTag(filterMap) {
  const filterContainer = document.getElementById("active-filters");
  console.log(filterMap);
  let html = "";
  for (let key in filterMap) {
    console.log("key : ", key);
    const filters = filterMap[key];
 
    if (key === "slider") {
      const prices = [0, 10000, 15000, 20000, 30000, "30000+"];

      let min;
      let max = prices[filters[1]];

      if (filters[0] === "0") {
        min = "Min";
      } else {
        min = prices[filters[0]].toString();
      }

      html += `  <span class="filter-tag">
          <span class="remove-tag">✕</span>${min}-${max}
       </span>`;
      
    } else {
      console.log("filters : ", filters);
      for (let i = 0; i < filters.length; i++) {
        console.log("filter : ", filters[i]);

        html += `  <span class="filter-tag">
          <span class="remove-tag">✕</span>${filters[i]}
       </span>`;
      }
    }
  }

  filterContainer.innerHTML = html;
}




export function renderPaginationControls(
  totalPages,
  currentPage,
  onPageChange
) {
  const paginationContainer = document.getElementById("pagination");
  paginationContainer.innerHTML = "";

  const pageInfo = document.createElement("span");
  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
  paginationContainer.appendChild(pageInfo);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.classList.add("page-button");
    if (i === currentPage) btn.classList.add("active");

    btn.addEventListener("click", () => onPageChange(i));
    paginationContainer.appendChild(btn);
  }

  if (currentPage < totalPages) {
    const nextBtn = document.createElement("button");
    nextBtn.textContent = "NEXT";
    nextBtn.classList.add("page-button");
    nextBtn.addEventListener("click", () => onPageChange(currentPage + 1));
    paginationContainer.appendChild(nextBtn);
  }
}