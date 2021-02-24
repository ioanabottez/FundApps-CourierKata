const costCalculator = require('../src/costCalculator');

describe('getOrderPrice', function() {
        const order ={ 
            parcels: [
            {
                size: 'Small',
                quantity: 1
            },
            {
                size: 'Medium',
                quantity: 1
            },
            {
                size: 'Large',
                quantity: 2
            },
            {
                size: 'XL',
                quantity: 3
            }
        ],
    };

        const receipt = {
            parcels:[
            {
                size: 'Small',
                quantity: 1,
                pricePerItem: 3,
                totalPrice: 3,
            },
            {
                size: 'Medium',
                quantity: 1,
                pricePerItem: 8,
                totalPrice: 8,
            },
            {
                size: 'Large',
                quantity: 2,
                pricePerItem: 15,
                totalPrice: 30,
            },
            {
                size: 'XL',
                quantity: 3,
                pricePerItem: 25,
                totalPrice: 75,
            }
        ],
    };    

        const receipt2 = {
            speedyShipping: 116,
            orderTotal: 232,
            parcels:[
            {
                size: 'Small',
                quantity: 1,
                pricePerItem: 3,
                totalPrice: 3,
            },
            {
                size: 'Medium',
                quantity: 1,
                pricePerItem: 8,
                totalPrice: 8,
            },
            {
                size: 'Large',
                quantity: 2,
                pricePerItem: 15,
                totalPrice: 30,
            },
            {
                size: 'XL',
                quantity: 3,
                pricePerItem: 25,
                totalPrice: 75,
            }
        ],
    }
    it("should calculate the correct price for a basic order without speedy delivery", function(){
        expect(costCalculator.getOrderPrice(order, false)).toEqual(receipt);
    });

    it("should calculate the correct price for a basic order with speedy delivery", function(){
        expect(costCalculator.getOrderPrice(order, true)).toEqual(receipt2);
    });
}); 