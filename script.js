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

    return true;
}
