function validateForm() {
    // Get the selected date and time
    var selectedDate = new Date(document.getElementById('eventDate').value + ' ' + document.getElementById('eventTime').value);

    // Check if the event time is on the hour
    if (selectedDate.getMinutes() !== 0) {
        alert('Events can only be scheduled on the hour.');
        return false;
    }

    // Check if the event time is between 3 am and 5 am
    var eventHour = selectedDate.getHours();
    if (eventHour >= 3 && eventHour < 5) {
        alert('Events cannot be scheduled between 3 am and 5 am.');
        return false;
    }

    // Check if equipment is selected and validate the amount of chairs and tables
    var equipmentCheckbox = document.getElementById('equipmentCheckbox');
    var equipmentSection = document.getElementById('equipmentSection');
    var chairsAmount = document.getElementById('chairsAmount').value;
    var tablesAmount = document.getElementById('tablesAmount').value;

    if (equipmentCheckbox.value === 'yes') {
        // Equipment is selected, validate the amount of chairs and tables
        if (isNaN(chairsAmount) || isNaN(tablesAmount) || chairsAmount < 0 || tablesAmount < 0) {
            alert('Please enter a valid number of chairs and tables for equipment.');
            return false;
        }
    }

    return true;
}

document.getElementById('equipmentCheckbox').addEventListener('change', function () {
    var equipmentSection = document.getElementById('equipmentSection');
    equipmentSection.style.display = this.value === 'yes' ? 'block' : 'none';
});

function displayConfirmationBox() {
    // Get the form data
    var formData = getFormData();

    // Construct a message with the entered information
    var confirmationMessage = 'Name: ' + formData.contactName + '\n' +
                              'Email: ' + formData.contactEmail + '\n' +
                              'Phone: ' + formData.contactPhone + '\n' +
                              'Party Size: ' + formData.partySize + '\n' +
                              'Event Duration: ' + formData.eventDuration + ' hours\n' +
                              'Event Name: ' + formData.eventName + '\n' +
                              'Event Date: ' + formData.eventDate + '\n' +
                              'Event Time: ' + formData.eventTime + '\n' +
                              // Add other form fields as needed
                              'Description: ' + formData.description + '\n\n' +
                              'Do you want catering? ' + formData.cateringCheckbox + '\n' +
                              'Do you need equipment? ' + formData.equipmentCheckbox;

    // Display the confirmation box
    var userConfirmed = window.confirm(confirmationMessage);

    // If user clicks OK, the form will be submitted
    if (userConfirmed) {
        document.getElementById('eventForm').submit();
    }
    // If user clicks Cancel, do nothing
}

function getFormData() {
    // Extract form data and return as an object
    var formData = {};
    formData.contactName = document.getElementById('contactName').value;
    formData.contactEmail = document.getElementById('contactEmail').value;
    formData.contactPhone = document.getElementById('contactPhone').value;
    formData.partySize = document.getElementById('partySize').value;
    formData.eventDuration = document.getElementById('eventDuration').value;
    formData.eventName = document.getElementById('eventName').value;
    formData.eventDate = document.getElementById('eventDate').value;
    formData.eventTime = document.getElementById('eventTime').value;
    formData.description = document.getElementById('description').value;
    formData.cateringCheckbox = document.getElementById('cateringCheckbox').value;
    formData.equipmentCheckbox = document.getElementById('equipmentCheckbox').value;
    // Add other form fields as needed

    return formData;
}

document.getElementById('eventForm').addEventListener('submit', function (event) {
    // Prevent the form from submitting the traditional way
    event.preventDefault();

    // Validate the form
    var isValid = validateForm();

    // If the form is valid, display the confirmation box
    if (isValid) {
        displayConfirmationBox();
    }
});







