// Author: Kyan Keise
// Date: 27/04/2022
// Title: Sliding Sign in & Sign up Form

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () =>
  container.classList.add("right-panel-active")
);

signInButton.addEventListener("click", () =>
  container.classList.add("right-panel-active")
);


