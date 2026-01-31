function validateReservation() {
    var name = document.forms["reservation"]["name"].value;
    var email = document.forms["reservation"]["email"].value;
    var number_of_people = document.forms["reservation"]["number_of_people"].value;
    var date = document.forms["reservation"]["date"].value;
    var time = document.forms["reservation"]["time"].value;
    var seating = document.forms["reservation"]["seating"].value;
    var checked = false;

    if (name == "") {
        alert("Name must be filled out.");
        return false;
    }
    if (email == "") {
        alert("Email must be filled out.");
        return false;
    }
    if (number_of_people == "") {
        alert("Please specify the number of people attending.");
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

    // Seating Validation

    for (var i = 0; i < seating.length; i++) {
        if (child[i].checked) {
            checked = true;
            break;
        }
    }

    if (!checked) {
        alert("Please advise if you wish to sit inside or outside.")
        return false;
    }
}