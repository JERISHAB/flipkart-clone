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
                      <span class="rating-box">${rating} ★</span>
                      <span class="rating-text">${rating_count} Ratings & ${review_count} Reviews</span>
                  </div>
                  <ul class="product-features">
                      <li>${ram} MB RAM | ${rom} MB ROM</li>
                      <li>${display_size_cm} cm (${display_size_inches} inch) Display</li>
                      <li>${camera_rear} Rear Camera</li>
                      <li>${battery_capacity_mah} mAh Battery</li>
                      <li>${warranty_device_years} Year warranty for device and ${warranty_accessories_months} for box accessories</li>
                  </ul>
              </div>
              
              <div class="product-price-details">
              <div class="price-div">
                  <h2 class="price">₹${price}</h2>
                  <img src="images/logos/assured.png" class="assured-img">
              </div>    
                  <div class="original-price">
                      <span class="strike">₹${original_price}</span>
                      <span class="discount-price">${discount_percent}% off</span>
                  </div>
                  <p class="stock-warning">Only ${stock_units_left} left</p>
                  <p class="exchange-text">Upto <span class="exchange-amount">₹${exchange_offer}</span> Off on Exchange</p>
                  <p class="bank-offer">${offers}</p>
              </div>

          </div>
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
              <span class="mdiscount">↓${discount_percent}%</span>
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
          <div class="mfeature">${ram} MB RAM | ${rom} MB ROM</div>
          <div class="mfeature">${display_size_cm} cm (${display_size_inches} inch) Display</div>
          <div class="mfeature">${camera_rear} Rear Camera</div>
          <div class="mfeature">${battery_capacity_mah} mAh Battery</div>
          <div class="mfeature">${warranty_device_years} Year warranty for device and ${warranty_accessories_months} for box accessories</div>
        </div>
      </div>`;
    });

    document.getElementById("mobile-sec").innerHTML = html;

  }