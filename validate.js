function validateOrder() {
    var fname = document.forms["order"]["fname"].value;
    var lname = document.forms["order"]["lname"].value;
    var email = document.forms["order"]["email"].value;
    var phone = document.forms["order"]["phone"].value;
    var company = document.forms["order"]["company"].value;
    var state = document.forms["order"]["state"].value;
    var city = document.forms["order"]["city"].value;
    var date = document.forms["order"]["date"].value;
    var time = document.forms["order"]["time"].value;
    var location = document.forms["order"]["location"];
    var number_of_machines = document.forms["order"]["number_of_machines"].value;
    var food = document.forms["order"]["food"];
    var colour = document.forms["order"]["colour"];
    var card_name = document.forms["order"]["card_name"].value;
    var card_number = document.forms["order"]["card_number"].value;
    var expire_date = document.forms["order"]["expire_date"].value;
    var cvc = document.forms["order"]["cvc"].value;
    var checked = false;
    var foodChecked = false;

    if (fname == "") {
        alert("First name must be filled out.");
        return false;
    }
    if (lname == "") {
        alert("Last name must be filled out.");
        return false;
    }
    if (email == "") {
        alert("Email must be filled out.");
        return false;
    }
    if (phone == "") {
        alert("Phone number must be filled out.");
        return false;
    }
    if (company == "") {
        alert("Company name must be filled out.");
        return false;
    }
    if (state === "") {
        alert("State must be selected.");
        return false;
    }
    if (city == "") {
        alert("City name must be filled out.");
        return false;
    }
    if (!date) {
        alert("Date must be filled out.");
        return false;
    }
    if (!time) {
        alert("Time must be filled out.");
        return false;
    }
    if (number_of_machines == "") {
        alert("Please specify the number of machines for order.");
        return false;
    }
    if (colour === "") {
        alert("Colour must be selected.");
        return false;
    }
    if (card_name == "") {
        alert("Card name must be filled out.");
        return false;
    }
    if (card_number == "") {
        alert("Card number must be filled out.");
        return false;
    }
    if (expire_date == "") {
        alert("Expire date must be filled out.");
        return false;
    }
    if (cvc == "") {
        alert("cvc must be filled out.");
        return false;
    }

    // Machine Location Validation

    for (var i = 0; i < location.length; i++) {
        if (location[i].checked) {
            checked = true;
        }
    }

    if (!checked) {
        alert("Please advise if you wish to sit inside or outside.")
        return false;
    }

    // Food Item Validation

    for (var i = 0; i < food.length; i++) {
        if (food[i].checked) {
            foodChecked = true;
        }
    }

    if (!foodChecked) {
        alert("Please select at least one food item.");
        return false;
    }
}