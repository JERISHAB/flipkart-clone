const fetchData = async () => {
  try {
    const res = await fetch("./data.json");
    const fetchData = await res.json();
    const originalArray = fetchData.products;

    renderProducts(originalArray);

    function renderProducts(dataArray) {
      let html = "";

        console.log("rnderring started")
        
      dataArray.forEach((product) => {
        const {
          title,
          brand,
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
          review_count,
          flipkart_assured,
          stock_units_left,
          offers,
          categories,
          image,
          } = product;
          
          const price = Math.floor(original_price * ((100-discount_percent)/100))

          console.log("enter for loog started");

        html += `
        <div class="product-card">
            <div class="product-image-div">
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
                    <p class="bank-offer">${offers}</p>
                </div>

            </div>
      </div>`;
          
      });
      document.getElementById("grid-sec").innerHTML = html;
    }
  } catch (error) {
    console.log(error);
  }
};


fetchData();