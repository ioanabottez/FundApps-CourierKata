const fs = require('fs');
const readFile = fs.readFileSync('parcel.json');
const newData = JSON.parse(readFile);

    const getOrderPrice = (order, isSpeedy) => {
       
        let orderArray = [];
        order.parcels.forEach(parcel => {
            const found = newData.parcel.find(element => parcel.size === element.size);
            const size = parcel.size;
            const quantity = parcel.quantity;

            const items = 
            {
                size, 
                quantity,
                pricePerItem: found.price,
                totalPrice: found.price * quantity,
            };
            orderArray.push(items);
        });

        if(isSpeedy)
        {
            const receipt = {
                speedyShipping: orderArray.reduce((a,b) => a + (b['totalPrice'] || 0), 0),
                orderTotal: orderArray.reduce((a,b) => a + (b['totalPrice'] || 0), 0) * 2,
                parcels: orderArray,
            };

            return receipt;
        }
       else
            {
                const receipt = {
                    parcels: orderArray,
                };
                return receipt;
            }

    };

module.exports = {
    getOrderPrice
} 