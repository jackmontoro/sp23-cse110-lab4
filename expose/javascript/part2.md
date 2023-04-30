1. The code prints "3". This is true because var had different scope than lets and const.

2. The code prints "NaN". There is no error, but the value of discountedPrice cannot be accessed here because it is set using prices[i] which is only obtainable in the loop where we have access to i. 

3. The code prints "NaN". This happens because the code cannot access the value at finalPrice which is set using the discountedPrice var, which is in turn set using the prices[i] value which is only accessible inside the for loop.

4. 
