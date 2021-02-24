# FundApps-CourierKata

# Setup 
Install node.js on your machine.

"git clone"

Get jest "npm install --save-dev jest".

Use "npm install" for dependencies. 

Use "npm test" to run the tests.

# Approach

I have recently became familiar with using Node.js, hence my choice of using it, and I imagined the data being passed as a JSON file, separating it from the rest of the code that manipulates it. The JSON file stores the types of parcels available, their price and weight limit in an array.

I tried to keep the design simple so the main file I am using is costCalculator.js that takes care of processing the fetched data and the testing file costCalculator.test.js. The testing file has been updated for each one of the tasks, checking if the output corresponds to correctly inserted data.

I assumed that the order comes in array-format, no parcel has negative weight and that they are properly labeled(size-wise). Also I kept in sight that a client can send more parcels that have the same size, but different weights (=> the weight property is an array as well).

# Time-limit

I made it to the 4th task in the 2 hours given. Since I have approached this on a step-by-step basis and wanted to cover as much as I could, the function that performs most of the work (getOrderPrice), grew bigger and it took more time to refactor, which is something I would definitely improve by creating other methods to take care of individual computations (such as speedy shipping).

Keeping the tests updated has also taken some time, making sure that they cover multiple scenarios (and that the testing data is actually correct).

# Task 5

I know this is the juicy part of the assignment where I was supposed to show off the greatest of my logic, but unfortunately the time didn't afford this to me. Considering that I would have refactored the previous code, I would try to implement a function or class that takes care of the discounted items. At first sight, I need the items sorted by size (which I did) and to loop through them, removing the ones with the smallest price and returning the totalDiscount on the order.

# Improvements

Something that I didn't take into account from the beginning and only figured out at the end is that there should be a function that checks if any of the basic parcels (small, medium, large, XL) fall into the "Heavy" category.

I would also write more precise tests, especially for the last task, where things can get quite messy and test edge cases.