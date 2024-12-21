const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyM7xFmZ3JMP-maMTzNAOAW7b5Q0j_diesj4o_SGS0lmmhC-cu5OvHGQWe1RHw3Jere/exec";

// Function to handle signup
async function signup(username, email, password) {
  const response = await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify({
      action: "signup",
      username,
      email,
      password,
    }),
  });
  const result = await response.json();

  // Alert the user and redirect on success
  if (result.success) {
    alert("Signup successful! Check your email for our message");
    window.location.href = "box.html"; // Replace with your signup success page
  } else {
    alert(result.message);
  }
}

// Function to handle login
async function login(username, password) {
  const response = await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify({
      action: "login",
      username,
      password,
    }),
  });
  const result = await response.json();

  // Alert the user and redirect on success
  if (result.success) {
    alert("Login successful! Welcome back to your dashboard");
localStorage.setItem("username", username); // Store username in localStorage
    window.location.href = "dashboard.html"; // Replace with your login success page
  } else {
    alert(result.message);
  }
}

