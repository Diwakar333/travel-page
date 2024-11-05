// const places = [
//   "France",
//   "India",
//   "United States",
//   "Germany",
//   "Canada",
//   "Australia",
// ];
// let index = 0;

// function toggleMenu() {
//   const menu = document.querySelector(".nav-menu");
//   menu.classList.toggle("show");
// }

// function changePlace() {
//   const placeElement = document.getElementById("changing-place");
//   placeElement.textContent = `Visit ${places[index]}`;
//   index = (index + 1) % places.length;
// }

// setInterval(changePlace, 200);

// function bookNow() {
//   const destination = document.getElementById("destination").value;
//   const persons = document.getElementById("persons").value;
//   const startDate = document.getElementById("startDate").value;
//   const endDate = document.getElementById("endDate").value;
//   const description = document.getElementById("description").value;

//   const currentDate = new Date().toISOString().split("T")[0];

//   if (
//     !destination ||
//     !persons ||
//     !startDate ||
//     !endDate ||
//     description.length < 50
//   ) {
//     alert("Please fill out all fields correctly.");
//     return;
//   }

//   if (new Date(startDate) < new Date(currentDate)) {
//     alert("Start Date must be a future date.");
//     return;
//   }

//   if (new Date(endDate) <= new Date(startDate)) {
//     alert("End Date must be after the Start Date.");
//     return;
//   }

//   alert("Booking Successful!");
// }

// login validation
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous validation messages
    const validationMessage = document.getElementById("validationMessage");
    validationMessage.textContent = "";

    // Get values from the form fields
    const email = document.getElementById("loginEmail").value; // Updated to unique ID
    const password = document.getElementById("loginPassword").value; // Updated to unique ID

    // Regular expression to check email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;

    // Email validation
    if (!emailPattern.test(email)) {
      validationMessage.innerHTML +=
        "<p>Please enter a valid email address.</p>";
      isValid = false;
    }

    // Password validation (at least 6 characters)
    if (password.length < 6) {
      validationMessage.innerHTML +=
        "<p>Password must be at least 6 characters long.</p>";
      isValid = false;
    }

    // Display success message if valid
    if (isValid) {
      validationMessage.innerHTML =
        "<p style='color: green;'>Login successful!</p>";

      document.getElementById("loginEmail").value = "";
      document.getElementById("loginPassword").value = "";
    }
  });

// Register validation
document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous validation messages
    const validationMessage = document.getElementById("validationMessage");
    validationMessage.textContent = "";

    // Get values from the form fields
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const contact = document.getElementById("contact").value;

    // Regular expressions for validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const contactPattern = /^[0-9]{10}$/;
    let isValid = true;

    // Fullname validation
    if (fullname.length < 3) {
      validationMessage.innerHTML +=
        "<p>Fullname must be at least 3 characters long.</p>";
      isValid = false;
    }

    // Email validation
    if (!emailPattern.test(email)) {
      validationMessage.innerHTML +=
        "<p>Please enter a valid email address.</p>";
      isValid = false;
    }

    // Password validation (at least 6 characters)
    if (password.length < 6) {
      validationMessage.innerHTML +=
        "<p>Password must be at least 6 characters long.</p>";
      isValid = false;
    }

    // Contact validation (must be a 10-digit number)
    if (!contactPattern.test(contact)) {
      validationMessage.innerHTML +=
        "<p>Contact must be a 10-digit number.</p>";
      isValid = false;
    }

    // Display success message if all validations pass
    if (isValid) {
      validationMessage.innerHTML =
        "<p style='color: green;'>Registration successful!</p>";
    }
  });
