/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

  /*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

const isAdult = (age) => {
    if(age >= 21) {
        return 'Adult';
    } else {
        return 'Minor';
    }
}

console.log('Exercise 2 Result:', isAdult(31));

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

const isCharAVowel = (character) => {
    if(character.length > 1) {
        return 'Please enter a single letter';
    }

    if (character == 'a' || character == 'A' ||
        character == 'e' || character == 'E' ||
        character == 'i' || character == 'I' ||
        character == 'o' || character == 'O' ||
        character == 'u' || character == 'U'
       ) {
        return 'true'
    } else {
        return 'false'
    }
}

console.log('Exercise 3 Result:', isCharAVowel('A'));

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

const generateEmail = (name , domain) => {
    return name + '@' + domain;
}

console.log('Exercise 4 Result:', generateEmail('jesusjruo', 'gmail.com'));

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return 'Good morning, Sam!'

Complete the exercise in the space below:
*/

const greetUser = (name , time) => {
    if (time == 'morning' || time == 'afternoon' || time == 'evening') {
        return 'Good ' + time + ', ' + name + '!'
    } else {
        return 'Please enter a valid time for this exercise';
    }
}

console.log('Exercise 5 Result:', greetUser('Jesus', 'blablabla'));

/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

const maxOfThree = (a , b , c) => {
    if (a > b && a > c) {
        return a;
    } else if(b > a && b > c){
        return b;
    } else if(c > a && c > b){
        return c;
    } else if(a == b || b == c || a == c) {
        return "Can't repeat numbers for this exercise";
    }
}

console.log('Exercise 6 Result:', maxOfThree(15, 15, 8));

/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

const calculateTip = (bill, percentage) => {
    let tip = (bill*percentage)/100;
    return tip;
}

console.log('Exercise 7 Result:', calculateTip(80, 14.7));