const costCalculator = require('../src/costCalculator');

describe('getOrderPrice', function() {
    it("should calculate the correct price for a basic order", function(){
        const order = [
            {
                size: 'Small',
                quantity: 1,
            },
            {
                size: 'Medium',
                quantity: 1,
            },
            {
                size: 'Large',
                quantity: 2,
            },
            {
                size: 'XL',
                quantity: 3
            },


        ];

        const receipt = [
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
        ];
        expect(costCalculator.getOrderPrice(order)).toEqual(receipt);
    });
}); 