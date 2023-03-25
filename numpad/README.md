# HTML Numpad
Download the source code below and add it to your website!

## Create a new Numpad

`<numpad id="numpad" onsubmit="console.log('submitted!')" allowTypeIn="true" max="5"></numpad>`

## Numpad Options

`onsubmit`: JavaScript to execute when the submit button is clicked

`allowTypeIn`: Show a button to prompt a user for input, rather than using the buttons

`max`: The max amount of numbers allowed to be inputted.

## Get Numpad's value

Use getAttribute('value')

### Example:
`console.log(document.getElementById('numpad').getAttribute('value'))`