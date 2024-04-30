1. This will output 3. This is because the variable i was declared with var, so the scope goes beyond just the for loop. So, i holds its value after the for loop, which is the length of the prices array, 3 in this case.
2. This will output 150. Since the last value in the prices array is 300, discountedPrice will hold its value from 300*(1-0.5) which is 150.
3. This will output 150, because the finalPrice computed during the last iteration of the for loop will be calculated using discountedPrice which is also 150. Math.round(150*100)/100 = 150 and this will again hold its value as such from the last iteration.
4. This will return [50, 100, 150]. This is because the for loop applys the 50% "discount" to each value passed in through the prices array which in this case is [100, 200, 300]. Each value is cut in half and then pushed onto the blank discounted array.
5. This causes an error because i is declared using let, which limits the scope to only the for loop in this case. Since i is being accessed outside of its scope and error is thrown.
6. This will cause an error. This is because the variable discountedPrice is declared using let inside of the for loop. Therefore, when its accessed outside of the for loop, it is out of scope and will cause an error.
7. This will output 150. This is because desipte finalPrice being declared using let, it is declared such that its scope lies within the entire discountPrices function. Therefore, the loop acts as expected and this outputs the discounted price of the last element, which is 150 in this case.
8. This will return [50, 100, 150]. The function acts as expected and applies the 50% discount to the three values 100, 200, 300. The discounted variable is declared using let, and thus has scope through the function. Therefore, when discounted is returned, it is within scope.
9. Line 11 will cause an error. This is because it is trying to access the variable i, which has been declared using let in the declaration of the for loop. This means that the variable i's scope is within the for loop and thus causes an error when accessed outside of it.
10. Line 12 will output the number 3. length is defined as a const and is equal to the length of the prices array passed in, which in this case is 3.
11. This function will return the array [50, 100, 150]. This is because the for loop iterates through i = 0 to length, where length is defined as the length of prices. On each iteration, the discount is applied to the relevant value. The variable discountedPrice is declared using const within the loop body, and this does not throw an error because it is not reassigned within the loop body. Each new iteration creates discountedPrice as a new variable. 
12. a. student.name
    b. student['Grad Year'] 
    c. student.greeting()
    d. student['Favorite Teacher'].name
    e. student.courseLoad[0]
13. a. '32' since '3' is a string and 2 maps to its string equivalent and + does not add it concatenates.
    b. 1 because for subtraction js converts the values to their numerical equivalent and does 3-2
    c. 3 since js takes 0 as null's numerical equivalent, and does normal addition since 3 is a number
    d. '3null' because adding '3' as a string will then concatenate null as its string equivalent
    e. 4 because true numerical equivalent is 1 
    f. 0 since false and null both map to 0
    g. '3undefined' because '3' is a string so + acts as concatenation
    h. NaN because undefined can not properly be converted to a number
14. a. true because js coverts values to numbers and 2 > 1
    b. false since both values are strings they are conpared in lexigraphical order and '2' is not less than the first character '1'.
    c. true, as one value is numerical so the string is then mapped to its numerical equivalent, and 2 == 2.
    d. false because === does strict comparison, and 2 is not equivalent to the string '2'.
    e. false, this is because true's numerical equivalent is 1, and 2 == 1 is false
    f. true since boolean(2) evaluates to true, and therefore the strict comparison is true.
15. == is a regular equality check, or a non strict check. This means that type conversion to create like types is done before comparing values. === on the other hand, is the strict equality operater. This operation does not perform any type comparison, therefore the type and values must be the same in order for this to return true. 

17. [2, 4, 6] because modifyArray takes in an array and a callback. In this case the array [1, 2, 3] is passed in and the function doSomething is the callback function. modifyArray is set up so that the doSomething array is called on each value of array. Since the doSomething array returns the value*2, when passed in [1, 2, 3] as the array, the modifyArray function will return [2, 4, 6].

19. outputs
1
4
3
2
This is due to the fact that 1 and 4 are logged immediately, and 3 and 4 are on time set for 0 ms and 1000 ms. Since 3 is set for 0ms that will immediately happen after the value 4, and then finally 2 will output afer 1 second.
