console.log(1 + "2" + "2");  // 122
/*
    (1 + "2")  =>  1 is number and "2" is a string. So, (number + string) leads number to string. S0, it concatinate into string ("12")
    ("12" + "2")  => in (string + string), here + will concatinate both strings ("122")
*/

console.log(1 + +"2" + "2") // 32
/*
   (1 + +"2")  =>  (+"2") here, + is unary operator and convert the "2" to number. So,it will be like (1 + 2) = 3
   (3 + "2")  =>  (number + string), number will be considered as string and both concate and that leads to  ("32")
*/

console.log(1 + -"1" + "2") // 02
/*
    (1 + -"1")  =>  (1 is a number and -"1" here, - is unary operator and convert the "1" into number and negate it. (1 - 1) = 0)
    (0 + "2")  =>  (number + string), number will be considered as string and both concate and that leads to  ("02")
*/

console.log(+"1" + "1" + "2") // 112

/*
    (+"1" + "1")  => (+"1" is unary operator and convert the "1" into number and "1" is a string. (number + string), number will be considered as string and both concate and that leads to  ("11")
    ("11" + "2")  =>  (string + string), here + will concatinate both strings ("112")
*/

console.log("A" - "B" + "2") // NaN2

/*
    ("A" - "B")  => both are strings and operators other than '+' won't work and lead to 'NaN'
    (NaN + "2")  =>  NaN + string leads to concatination (NaN2)
*/

console.log("A" - "B" + 2) // NaN

/*
    ("A" - "B")  => both are strings and operators other than '+' won't work and lead to 'NaN'
    (NaN + 2)  =>  NaN + number leads to NaN (NaN)
*/