function showConfirmation() {
    // Get form values
    var eventTitle = document.getElementById("eventTitle").value;
    var groupName = document.getElementById("groupName").value;
    var room = document.getElementById("room").value;

    // Build confirmation message
    var confirmationMessage = "Event Title: " + eventTitle + "\n";
    confirmationMessage += "Group Name: " + groupName + "\n";
    confirmationMessage += "Room: " + room + "\n";

    // Show custom modal with confirmation message
    document.getElementById("confirmationMessage").innerText = confirmationMessage;
    document.getElementById("confirmationButton").style.display = "block";
    document.getElementById("confirmationModal").style.display = "block";
}

function confirmEvent() {
    document.forms[0].submit();
}

function closeModal() {
    document.getElementById("confirmationModal").style.display = "none";
}

