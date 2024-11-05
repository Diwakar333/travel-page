const places = [
  "France",
  "India",
  "United States",
  "Germany",
  "Canada",
  "Australia",
];
let index = 0;

function toggleMenu() {
  const menu = document.querySelector(".nav-menu");
  menu.classList.toggle("show");
}

function changePlace() {
  const placeElement = document.getElementById("changing-place");
  placeElement.textContent = `Visit ${places[index]}`;
  index = (index + 1) % places.length;
}

setInterval(changePlace, 200);

function bookNow() {
  const destination = document.getElementById("destination").value;
  const persons = document.getElementById("persons").value;
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;
  const description = document.getElementById("description").value;

  const currentDate = new Date().toISOString().split("T")[0];

  if (
    !destination ||
    !persons ||
    !startDate ||
    !endDate ||
    description.length < 50
  ) {
    alert("Please fill out all fields correctly.");
    return;
  }

  if (new Date(startDate) < new Date(currentDate)) {
    alert("Start Date must be a future date.");
    return;
  }

  if (new Date(endDate) <= new Date(startDate)) {
    alert("End Date must be after the Start Date.");
    return;
  }

  alert("Booking Successful!");
}
