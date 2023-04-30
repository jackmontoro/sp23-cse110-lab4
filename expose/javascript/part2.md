1. The code prints "3". This is true because var had different scope than lets and const. JS can access var outside of the for loop.

2. The code prints "150". There is no error because variables declared with the var keyword can be accessed outside of the for loop.

3. The code prints "150". This happens because finalPrice is declared in the scope of the console.log command.

4. The code prints nothing. This is true because there is no console.log statement and return values are not automatically printed in JS.

5. The code prints nothing. This is the case because there is never a function call outside of the function definition. This means none of the code in discountPrices ever runs.

6. The code causes the error: "ReferenceError: discountedPrice is not defined." The let keyword does not allow the variable to be called outside of the for loop where it is declared.

7. The function prints "150." finalCount is declared with let outside the for loop, so the console.log command can access the finalCount variable.

8. The function prints nothing because there is no console.log command in the code.

9. The function returns the error: "ReferenceError: i is not defined". This is true because i is declared using the let keyword within the for loop. Therefore, it cannnot be called outside the for loop.

10. The code returns "3" because the const variable length is declared within the scope of the function, outside the for loop and is never re-assigned.

11. The code prints nothing. The const variable is discountedPrice is declared and assigned each iteration of the for loop and never re-assigned within the iteration, so there is no error.

12. A. student.name

B. student['Grad Year']

C. student.greeting()

D. student['Favorite Teacher'].name

E. student.courseLoad[0]

13. A. '3' + 2 = '32'. JS converts 2 to a string and concatenates '2' to the end of '3' to form '32' 

B. '3' - 2 = 1. JS converts '3' to a Number and subtracts 2 to yield 1.

C. 3 + null = 3. JS converts null to 0 and adds three to 0 to form 3.

D. '3' + null = '3null'. JS converts null to the string 'null' and concatenates 'null' to the end of '3' to get '3null'.

E. true + 3 = 4. JS converts true to the number 1 to get 1 + 3 = 4.

F. false + null = 0. JS converts both false and null to the number 0 to get 0 + 0 = 0.

G. '3' + undefined = '3undefined'. JS converts undefined to the string 'undefined' to get '3' + 'undefined' = '3undefined'.

H. '3' - undefined = 'NaN'. undefined undergoes numeric conversion to NaN and when subtracted from 3 yields NaN.

14. A. '2' > 1 = true. '2' is converted to a number and the comparision 2 > 1 returns the boolean value true.

B. '2' < '12' = false. Both '2' and '12' are treated like strings and the first chars are evaluated by their lexographical order in the ASCII table. 1 comes before 2, so the comparison evaluates to false.

C. 2 == '2' = true. The string '2' becomes the number 2 so the comparison is true.

D. 2 === '2' = false. === is the strict equality operator, so the comparison evaluates the variables without type conversion. They are different types, so the comparison is false.

E. true == 2 = false. true is converted to the number 1 and 1 does not equal 2, so the comparison is false.

F. true === Boolean(2) = true. The variable Boolean(2) represents the true boolean value, so the strict equality operator evaluates the statement true === true as true.

15. The == operator will convert types of variables so variables of different types can be equivalent such as '1' == 1. The === operator will first check that the types are the same, and will return false if they are different. It will then check the values to ensure they are the same.

16. 
'''
for(const property in statistics){
    if (property[0] == 'r' || statistics[property] % 2 == 1){
        console.log(statistics[property]);
    }
}
'''