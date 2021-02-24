const costCalculator = require('../src/costCalculator');

describe('getOrderPrice', function() {
        const order ={ 
            parcels: [
            {
                size: 'Small',
                quantity: 1,
                weight: [1]
            },
            {
                size: 'Medium',
                quantity: 1,
                weight: [4]
            },
            {
                size: 'Large',
                quantity: 2,
                weight: [10, 6]
            },
            {
                size: 'XL',
                quantity: 3,
                weight: [10, 12, 6]
            }
        ],
    };

        const receipt = {
            parcels:[
            {
                size: 'Small',
                quantity: 1,
                pricePerItem: 3,
                overweightPricePerItem: [0],
                totalPrice: 3,
            },
            {
                size: 'Medium',
                quantity: 1,
                pricePerItem: 8,
                overweightPricePerItem: [2],
                totalPrice: 10,
            },
            {
                size: 'Large',
                quantity: 2,
                pricePerItem: 15,
                overweightPricePerItem: [8, 0],
                totalPrice: 38,
            },
            {
                size: 'XL',
                quantity: 3,
                pricePerItem: 25,
                overweightPricePerItem: [0, 4, 0],
                totalPrice: 79,
            }
        ],
    };    

        const receipt2 = {
            speedyShipping: 130,
            orderTotal: 260,
            parcels:[
                {
                    size: 'Small',
                    quantity: 1,
                    pricePerItem: 3,
                    overweightPricePerItem: [0],
                    totalPrice: 3,
                },
                {
                    size: 'Medium',
                    quantity: 1,
                    pricePerItem: 8,
                    overweightPricePerItem: [2],
                    totalPrice: 10,
                },
                {
                    size: 'Large',
                    quantity: 2,
                    pricePerItem: 15,
                    overweightPricePerItem: [8, 0],
                    totalPrice: 38,
                },
                {
                    size: 'XL',
                    quantity: 3,
                    pricePerItem: 25,
                    overweightPricePerItem: [0, 4, 0],
                    totalPrice: 79,
                }
            ],
        }
    it("should calculate the correct price for an order with weight limit but without speedy delivery", function(){
        expect(costCalculator.getOrderPrice(order, false)).toEqual(receipt);
    });

    it("should calculate the correct price for an order with weight limit and with speedy delivery", function(){
        expect(costCalculator.getOrderPrice(order, true)).toEqual(receipt2);
    });
}); 