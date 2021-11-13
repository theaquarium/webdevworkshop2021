const totalPrice = document.querySelector('#total-price');
const totalItems = document.querySelector('#total-items');

const itemPrices = {
    'apple': 2,
    'banana': 4,
    'orange': 1,
}
let itemsList = [];

document.querySelectorAll('.item').forEach(function(itemCard) {
    const itemType = itemCard.dataset.item;

    itemCard.querySelector('.item-button > button').addEventListener('click', function() {
        itemsList.push(itemType);

        const numItems = itemsList.length;
        if (numItems === 0) {
            totalItems.innerHTML = 'nothing';
        } else if (numItems === 1) {
            totalItems.innerHTML = '1 item';
        } else {
            totalItems.innerHTML = `${numItems} items`;
        }

        let price = 0;
        itemsList.forEach(function(item) {
            price += itemPrices[item];
        });
        totalPrice.innerHTML = `$${price}`;
    })
});
