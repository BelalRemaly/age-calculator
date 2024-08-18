var months = ["jan", "feb", "march", "april", "may", "june", "july", "aug", "sep", "oct", "nov", "dec"];

// Populate the day, month, and year dropdowns
for (var i = 1; i <= 31; i++) {
    document.getElementById('day').innerHTML += "<option>" + i + "</option>";
}
for (var j = 0; j < 12; j++) {
    document.getElementById('month').innerHTML += "<option value='" + j + "'>" + months[j] + "</option>";
}
for (var k = 1990; k <= 2020; k++) {
    document.getElementById('year').innerHTML += "<option>" + k + "</option>";
}

// Calculate the age based on the selected date
function calculate() {
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);

    let birthDate = new Date(year, month, day);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDifference = today.getMonth() - birthDate.getMonth();
    let dayDifference = today.getDate() - birthDate.getDate();
    if (monthDifference < 0) {
        age--;
        monthDifference += 12;
    }
    if (dayDifference < 0) {
        monthDifference--;
        dayDifference += 30;
    }
    else if (monthDifference == 0) {
        document.getElementById("age").innerHTML = "You are " + age + " years old";
    }
    document.getElementById("age").innerHTML = "You are " + age + " years old and " + monthDifference + " months " + dayDifference + " day";
}
