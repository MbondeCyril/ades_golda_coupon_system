const products = [];
  const goldPricePerCarat = 47013; // Price of 0.1 carat of gold in XAF(0.1 carat of gold = 47013 XAF)

  function addProduct() {
    const productName = document.getElementById('productName').value;
    const category = document.getElementById('category').value;
    const location = document.getElementById('location').value;
    const condition = document.getElementById('condition').value;
    const date = document.getElementById('date').value;
    const priceXAF = document.getElementById('price').value;
    const priceGOLDA = (priceXAF / goldPricePerCarat).toFixed(2);
    const productID = 'CPI-' + Date.now(); // Generate a unique product ID (CPI short for Crop Item)

    //The user's input will be added in the table)
    products.push({ productName, productID, category, location, condition, date, priceXAF, priceGOLDA });
    alert('Product added successfully!');

    const table = document.getElementById('productsTable');
    // Clear all rows except the header
    table.innerHTML = table.rows[0].innerHTML;

    products.forEach(product => {
      const row = table.insertRow();
      Object.values(product).forEach(text => {
        const cell = row.insertCell();
        cell.textContent = text;
      });
    });
  }