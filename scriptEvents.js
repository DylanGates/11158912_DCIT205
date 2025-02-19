function toggleEventDetails(eventId) {
  const eventSection = document.getElementById(eventId);
  const eventDetails = eventSection.querySelector(".event-details");
  const isShow = eventSection.getAttribute("data-show") === "true";
  eventSection.setAttribute("data-show", !isShow);
}

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Retrieve form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
  
    // Display registration details
    var registrationDetails = "Name: " + name + "\nEmail: " + email;
    alert("Registration successful!\n\n" + registrationDetails);
  
    // Clear form inputs
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
  });