var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Input field invalid input or left empty");
        return false;
    }
}
function validateForm() {
    var x = document.forms["myForm"]["lname"].value;
    if (x == "") {
        alert("Input field invalid input or left empty");
        return false;
    }
}
function validateForm() {
    var x = document.forms["myForm"]["message"].value;
    if (x == "") {
        alert("Input field invalid input or left empty");
        return false;
    }
}
function validateForm() {
    var x = document.forms["myForm"]["num"].value;
    if (x == "") {
        alert("Input field invalid input or left empty");
        return false;
    }
}