const cartArray = [];
function display(cartProduct) {
    // console.log(cartProduct);
    let totalPrice = 0;
    const tableBody = document.getElementById('product-cart');
    tableBody.innerHTML = '';
    for (let i = 0; i < cartProduct.length; i++) {
        const name = cartArray[i].productName;
        const price = cartArray[i].productPrice;
        totalPrice = totalPrice + price;
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
        <td>${price}</td>
        `
        tableBody.appendChild(tr);
    }
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <th></th>
        <td>Total Price</td>
        <td>${totalPrice}</td>
    `
    tableBody.appendChild(tr);
}

function byNowButton(element) {
    // console.log(element.parentNode.parentNode.children[0].innerText);
    const productName = element.parentNode.parentNode.children[0].innerText;
    const productPrice = element.parentNode.parentNode.children[1].children[0].innerText;
    // console.log(productName);
    // console.log(productPrice);
    const cardObj = {
        productName: productName,
        productPrice: parseInt(productPrice)
    };
    cartArray.push(cardObj);
    document.getElementById('total-added-product').innerText = cartArray.length;
    display(cartArray);
}