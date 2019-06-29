console.clear();

// DECLARING VARIABLES 
// Declare variables that will
// store references for 
// <input type="button" id="submit-button">,
let myForm = document.querySelector("form");
let submit_btn = document.getElementById("submit-btn");

// <input type="text" id="fullname">,

let fullname = document.getElementById("fullname");

// <input type="text" id="email">

let em = document.getElementById("email");

// <textarea id="message"></textarea>

let msg = document.getElementById("message");

// Declare variable that will 
// store regular expression for email

let email_expression = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).
function validate() {


    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
    // Declare object that will store the form-data
    // Declare array that will store the errors

    let data = {};
    let errors = [];

    //    +
    //    -- -- -- -- -- - +
    //    |
    //    FULL NAME |
    //        + -- -- -- -- -- - +
    // Check if fullname is not empty.
    // If so:
    // Pass the collected value
    // to your object "data".
    // Otherwise:
    // Create a corresponding error-message
    // and add it to your array "errors".
    // End your conditional here.
    if (fullname.value != "") {
        data.fullName = fullname.value;
        console.log(`Your full name is: ${fullname.value}`);
    } else {
        errors.push("Please enter your full name!");
        console.log(`No name entered!`);
    }

    //        +
    //        -- -- -- - +
    //        |
    //    EMAIL |
    //        + -- -- -- - +
    // Check if email is not empty.
    // Check if email is valid.
    // If so:
    // Pass the collected value
    // to your object "data".
    // Otherwise:
    // Create a corresponding error-message
    // and add it to your array "errors".
    // End your nested conditional here.
    // Otherwise:
    // Create a corresponding error-message
    // and add it to your array "errors"
    // End your outer conditional here.
    if (em.value != "") {
        if (email_expression.test(em.value)) {
            data.email = em.value;
            console.log(`Your email is: ${em.value}`);
        } else {
            errors.push("Enter a VALID email, please.");
            console.log("Email NOT VALID.");
        }
    } else {
        errors.push("Enter an email, please.");
        console.log("No Email entered.");
    }

    //
    //        +
    //        -- -- -- -- - +
    //        |
    //    MESSAGE |
    //        + -- -- -- -- - +
    // Check if message is not empty.
    // If so:
    // Pass the collected value
    // to your object "data".
    // Otherwise:
    // Create a corresponding error-message
    // and add it to your array "errors"
    // End your conditional here.
    if (msg.value != "") {
        data.message = msg.value;
        console.log(`Your message is: ${msg.value}`);
    } else {
        errors.push("Enter a message, please.");
        console.log("No message typed.");
    }

    //    +
    //    -- -- -- -- -- -- -- -- - +
    //    |
    //    FEEDBACK / ERRORS |
    //        + -- -- -- -- -- -- -- -- - +
    // Check if there is anything in array errors
    // If so: 
    // Print it in JavaScript console.
    // Otherwise:
    // Print the data in JavaScript console.
    // Clear text-fields
    // End your conditional here.
    if (errors.length != 0) {
        console.dir(errors);
    } else {
        console.dir(data);
        myForm.reset();
    }
    // Close your function here
}
// Register your form to "click" event.
submit_btn.addEventListener("click", validate);
