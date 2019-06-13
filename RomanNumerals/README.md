# Roman Numerals

#### A webpage created to convert numbers to roman numerals. 6/13/2019

#### By **Tae Lee and Abdellah Ramadan**

## Description

A webpage created with jQuery, CSS and HTML to convert numbers into roman numerals.
This webpage utilizes jQuery and CSS styles.
A user inputs a number without numbers.
It runs the input through the back end logic and returns a roman numeral.

### Specs
| Spec                                                                       | Input                            | Output                                    |
| :------------------------------------------------------------------------- | :------------------------------- | :---------------------------------------- |
| we want to take number only not char or special char                       | xcdfdfdf                         | you can't type it!                        |
| when input is 1                                                            | 1                                | I                                         |
| when input is 2                                                            | 2                                | II                                        |
| when input is less than 4                                                  | 3                                | III                                       |
| When input is 4                                                            | 4                                | IV                                        |
| When input is 5                                                            | 5                                | V                                         |
| When input is greater then 5 but less then 9                               | 7                                | VII                                       |
| When input is 9 and 10 respectively                                        | 9, 10                            | IX, X                                     |
| This is conversion and so do the largest number first!                     | convert the largest one first    | ex. 115 --> C and 15 --> CX and 5 -->CXV  |
| We need specific characters for 4, 5, and 9. If it is true,                | index for 40, 50, 90             | XL, L, XC                                 |
| So do 40, 50, and 90 ...400, 500, 900                                      | index for 400, 500, 900          | CD, D, CM                                 |
| make empty string for roman numerals writing                               | var result = '';                 |                                           |
| for loop for each decimals                                                 |                                  |                                           |
| use modulus to compare it with number itself                               |                                  |                                           |
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
