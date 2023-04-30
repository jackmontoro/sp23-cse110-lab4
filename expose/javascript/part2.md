1. The code prints "3". This is true because var had different scope than lets and const. JS can access var outside of the for loop.

2. The code prints "NaN". There is no error, but the value of discountedPrice cannot be accessed here because it is set using prices[i] which is only obtainable in the loop where we have access to i. 

3. The code prints "NaN". This happens because the code cannot access the value at finalPrice which is set using the discountedPrice var, which is in turn set using the prices[i] value which is only accessible inside the for loop.

4. The code prints nothing. This is true because there is no console.log statement and return values are not automatically printed in JS.

5. The code prints nothing. This is the case because there is never a function call outside of the function definition. This means none of the code in discountPrices ever runs.

6. The code causes the error: "ReferenceError: discountedPrice is not defined." The let keyword does not allow the variable to be called outside of the for loop where it is declared.

7. The function prints "NaN." finalCount is declared with let outside the for loop, so the console.log command can access the finalCount variable, but cannot access the value it is set to during the for loop.

8. The function prints nothing because there is no console.log command in the code.