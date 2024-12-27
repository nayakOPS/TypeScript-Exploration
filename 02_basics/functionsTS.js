// Functions in TypeScript
var total;
var totalRest;
function Summ(n1, n2) {
    return n1 + n2;
}
total = Summ(1, 90);
// Unlimited Arguments (Rest Parameters)
function SumRest() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, num) { return total + num; }, 0);
}
totalRest = SumRest(1, 3, 4, 5, 34, 66, 7, 453, 342);
console.log(total);
console.log(totalRest);
function signUp(name, email, password, isMember) {
    if (!name || name.trim() === "") {
        console.log("Name is required.");
        return;
    }
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        console.log("Invalid email address.");
        return;
    }
    if (!password || password.length < 8) {
        console.log("Password must be at least 8 characters long.");
        return;
    }
    if (isMember !== false) {
        console.log("isMember must be false for new sign-ups.");
        return;
    }
    console.log("Sign-up successful for:", name);
}
signUp("John Doe", "john.doe@example.com", "password123", false);
// default value pass as false for the isMember
var login = function (email, password, isMember) {
    if (isMember === void 0) { isMember = false; }
    // Validate the email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        console.log("Invalid email address.");
        return;
    }
    // Validate the password length
    if (!password || password.length < 8) {
        console.log("Password must be at least 8 characters long.");
        return;
    }
    // Proceed with the login logic
    console.log("Login successful for email:", email, "and isMember:", isMember);
    // Here you can add logic to check the user's credentials against a database or perform other actions
};
// Example usage
login("john.doe@example.com", "password123");
// to handle returning of more than one data type
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
console.log(getValue(1));
