const fs = require('fs');

    const getOrderPrice = (order) => {
        const readFile = fs.readFileSync('parcel.json');
        const newData = JSON.parse(readFile);

        let orderArray = [];
        order.forEach(parcel => {
            const found = newData.parcel.find(element => parcel.size === element.size);
            const size = parcel.size;
            const quantity = parcel.quantity;

            const receipt = 
                {
                    size, 
                    quantity,
                    pricePerItem: found.price,
                    totalPrice: found.price * quantity,
                };
            orderArray.push(receipt);
        });

        return orderArray;

    };


module.exports = {
    getOrderPrice
} 