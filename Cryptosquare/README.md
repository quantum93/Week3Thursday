# Cryptosquare project

#### A webpage created to convert a sentence in string format to an encrypted sentence based on Cryptosquare logic. 6/13/2019

#### By **Tae Lee and Abdellah Ramadan**

## Description

A webpage created with jQuery, CSS and HTML to convert numbers into roman numerals.
This webpage utilizes jQuery and CSS styles.
A user inputs a string with numbers, low/upper-case, and special characters.
It runs an encryption using Cryptosquare logic and return encrypt message.

### Specs
| Spec                                                              | Input                            | Output                                    |
| :---------------------------------------------------------------- | :------------------------------- | :---------------------------------------- |
| enter a sentence in string and repeat it exactly in output        | "Don't Compare Yourself...       | "Don't Compare Yourself...                |
| a sentence input becomes a lowercase sentence                     | "Don't Compare Yourself...       | "don't compare yourself...                |
| strip every special characters and space using regular expression | "don't compare yourself...       | dontcompareyourself                       |
| find the number of string after regular expression                | console.log(stringNumber)        | 85                                        |
| find the square row from the number of string                     | 85 characters in string          | SQRT(85) and Math.ceil to give 10         |
| find the square column from the number of string                  | 85 characters in string          | SQRT(85) and Math.floor to give 9         |
| make two array and one is for row input and other is column input |                                  |                                           |
| save characters only string to an array of single character       | "don't compare yourself...       | d,o,n,t,c,o,m,p,a,r,e,y,o,u ~             |
| save 1D array to 2D array                                         | d,o,n,t,c,o,m,p,a,r,e,y,o,u ~    | 

|
...
...
...

## Setup/Installation Requirements

1. To run this program, clone repository from this GitHub.
2. Open file in a web browser such as Google Chrome.
3. Type a number and click the "Translate!" button.
4. It converts the number into a roman numeral.
5. The bootstrap file should be under "css" folder of project and jQuery file should be under "js" directory.

## Known Bugs
* No known bugs at this time.

## Technologies Used
  * HTML
  * CSS (bootstrap 3.3.7 which is available in https://getbootstrap.com/docs/3.3/)
  * Javascript
  * jQuery-3.4.1 (https://jquery.com/download/)

## Support and contact details

If there are any questions, bugs or concerns, please contact ajrmdn@gmail.com or taebumlee@gmail.com

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2017 **Tae Lee Abdellah Ramadan**
