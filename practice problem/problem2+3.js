const isTrue = confirm('Want to see your browser location?')
if (isTrue) {
    console.log(location.href);
}
else {
    const userInput = prompt('Give a Number');
    const addedNumber = parseFloat(userInput) + 200;
    alert(`Result is: ${addedNumber}`)
}
