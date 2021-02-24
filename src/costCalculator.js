const fs = require('fs');
const readFile = fs.readFileSync('parcel.json');
const newData = JSON.parse(readFile);

const getOverweightPrice = (parcel, weight) => {

    if (weight > parcel.weightLimit)
        if(parcel.size != "Heavy")
            return (weight - parcel.weightLimit) * 2;
        else
            return (weight - parcel.weightLimit);
    else 
        return 0;
}


    const getOrderPrice = (order, isSpeedy) => {
       
        let orderArray = [];
        order.parcels.forEach(parcel => {
            const found = newData.parcel.find(element => parcel.size === element.size);
            const size = parcel.size;
            const quantity = parcel.quantity;

            let overweight = [];
            parcel.weight.forEach(
                parcelWeight => overweight.push(getOverweightPrice(found, parcelWeight))
            );

            const items = 
            {
                size, 
                quantity,
                pricePerItem: found.price,
                overweightPricePerItem: overweight,
                totalPrice: found.price * quantity + overweight.reduce((a,b) => a + b, 0),
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