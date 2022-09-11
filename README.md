Describe: createArray()

Test 1: "The function should return an array with all values between 0 and the user entered number as strings." 
Code: createArray("6") 
Expected Result: ["0", "1", "2", "3", "4", "5", "6"]

Describe: roboResponse()

Test 2: "It should change any number containing a 3 to the phrase "Won't you be my neighbor?" 
Code: createArray("6") 
Expected Result: ["0", "1", "2", "Won't you be my neighbor?", "4", "5", "6"]

Test 3: "It should change any number containing a 2 to the phrase "boop;" with of course the exception of 3 which will reamin the previous phrase of "Won't you be my neighbor?" 
Code: createArray("6") 
Expected Result: ["0", "1", "boop", "Won't you be my neighbor?", "4", "5", "6"]

Test 4: "It should change any number containing a 1 to the phrase "beep;" except the numbers 2 and 3 which will remain the same phrases from before." Code: createArray("14") 
Expected Result: ["0", "beep", "boop", "Won't you be my neighbor?", "4", "5", "6", "7", "8", "9", "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!"]