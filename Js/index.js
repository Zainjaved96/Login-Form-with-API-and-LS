// initializing Form
var form = document.getElementById("form");
var confirmBox = document.getElementById("confirm");

// Add Event Listener when form is submit
form.addEventListener("submit", function (event) {
  // When form is submitted then we get the input values
  var email = document.getElementById("email").value;
  var textArea = document.getElementById("textarea").value;
  var name = document.getElementById("name").value;

  // Prevents Submitting Form
  event.preventDefault();

  // Fetching Api we want to post form data to
  fetch("https://jsonplaceholder.typicode.com/posts/", {
    // Creating object with POST METHOD
    method: "POST",
    body: JSON.stringify({
      // Adding Data to object
      email: email,
      body: textArea,
      name: name,
      userId: 23,
    }),
    // Headers for format and content-type
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    // Getting Response from api
    .then((response) => response.json())

    // Getting Data
    .then((data) => console.log(data));

  // Using Local Storage to store Data that we can get back in Confirmation Page
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("query", textArea);

  window.location.href = "/confirmation.html";
});
