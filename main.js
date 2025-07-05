/*
* @Author: Wiranata
* @StudentID: 468771
* @Date: 07/04/2025
* @Description: GLA 1 - JavaScript Essentials
*/

/* Write your code below this line */


//1. Display your full name inside of an H1 element. Use a variable to store your name.
const addH1 = document.createElement("h1");
let name = "Wiranata";
addH1.id = 'nameID';
addH1.innerHTML = name;
const mainElement = document.querySelector('main');
mainElement.appendChild(addH1);

//2. Make your name center-aligned and change its color to #AA0061. 
addH1.style.color = '#AA0061';
addH1.style.textAlign = 'center';

//3. Append two input elements and one button. When the button is clicked, display the sum of the two input elements on the page. Do not use alert or console. Your result must be displayed on the page.
//4. Validate the values in the input fields. The input should only accept numbers. If the input is not a number, set the input box’s borders to color #D40404. 

const addInput1 = document.createElement('input');
addInput1.id = 'input1';
mainElement.appendChild(addInput1);

const addInput2 = document.createElement('input');
addInput2.id = 'input2';
mainElement.appendChild(addInput2);

const addButton = document.createElement('button');
addButton.innerHTML = 'Sum It Up!';
addButton.id = 'Button';
mainElement.appendChild(addButton);

function getInputValue(){
    const inputValue1 = addInput1.value;
    const inputValue2 = addInput2.value;
    const sum = parseInt(inputValue1) + parseInt(inputValue2)

    let displayText = document.getElementById('displayID');
    console.log('display text = ', displayText);
    if (!displayText) {
        displayText = document.createElement('h2');
        displayText.id = 'displayID';
        displayText.style.fontSize = '3vw';
        mainElement.appendChild(displayText);
    } //if displayText is null create element and appendchild to main

    switch (true) {
        case isNaN(inputValue1) && isNaN(inputValue2):
            addInput1.style.border = 'solid #D40404'; //input border to red, show that input is wrong
            addInput2.style.border = 'solid #D40404'; //input border to red, show that input is wrong
            document.getElementById('displayID').innerHTML = "Please only input numbers in both fields";
            addInput1.value = '';
            addInput2.value = '';
            break;
        case isNaN(inputValue1):
            addInput1.style.border = 'solid #D40404'; //input border to red, show that input is wrong
            addInput2.style.border = ''; //input border to normal
            document.getElementById('displayID').innerHTML = "Input 1 must be a number";
            addInput1.value = '';
            break;
        case isNaN(inputValue2):
            addInput1.style.border = ''; //input border to normal
            addInput2.style.border = 'solid #D40404'; //input border to red, show that input is wrong
            document.getElementById('displayID').innerHTML = "Input 2 must be a number";
            addInput2.value = '';
            break;
        default:
            document.getElementById('displayID').innerHTML = sum;
            addInput1.value = ''; //clear input
            addInput2.value = ''; //clear input
            addInput1.style.border = ''; //input border to normal
            addInput2.style.border = ''; //input border to normal
    }
    
}

addButton.addEventListener('click', getInputValue);

//5. Add style to at least two other elements in your page.
let nameID = document.getElementById('nameID');
let input1ID = document.getElementById('input1');
let input2ID = document.getElementById('input2');
let buttonID = document.getElementById('Button');


let nameStyle = nameID.style;
nameStyle.margin = '2vw auto';
nameStyle.fontSize = '4vw';

let mainStyle = mainElement.style;
mainStyle.display = 'flex';
mainStyle.flexDirection = 'column';
mainStyle.justifyContent = 'center';
mainStyle.alignItems = 'center';

let input1Style = input1ID.style;
input1Style.textAlign = 'center';
input1Style.fontSize = '2vw';
input1Style.margin = '1vw';
input1Style.width = '30vw';
input1Style.height = '3vw';
input1Style.borderRadius = '20px';

let input2Style = input2ID.style;
input2Style.textAlign = 'center';
input2Style.fontSize = '2vw';
input2Style.margin = '1vw';
input2Style.width = '30vw';
input2Style.height = '3vw';
input2Style.borderRadius = '20px';

let buttonStyle = buttonID.style;
buttonStyle.width = '20vw';
buttonStyle.height = '3vw';
buttonStyle.margin = '1vw';
buttonStyle.fontSize = '2vw';











