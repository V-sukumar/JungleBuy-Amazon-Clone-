let loginBtn = document.getElementById("adminLoginBtn");
let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");
let loginMessage = document.querySelector("#login-message");

loginBtn.addEventListener("click", (event) => {
  event.preventDefault();

  let email = emailInput.value;
  let password = passwordInput.value;

  if (email == "") {
    alert("Fill your email.");
  } else if (password == "") {
    alert("Fill the password.");
  } else {
      fetch("https://63c822925c0760f69ac60c18.mockapi.io/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((response) => {
          console.log(response);
          if (response.ok) {
            alert("LOGIN - SUCCESSFUL");
            setTimeout(() => {
              window.location.href = "admin.html";
            }, 500);
          } else {
            alert("Failed to login. Please try again.");
            emailInput.value = "";
            passwordInput.value = "";
          }
        })
        .catch((error) => {
          alert("Failed to login. Please try again.");
          emailInput.value = "";
          passwordInput.value = "";
        });
  }
});
