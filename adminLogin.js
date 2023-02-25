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
    let obj = {
      email,
      password
    }
    // console.log(obj)
    fetch("https://63c812db075b3f3a91d99323.mockapi.io/adminusers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          alert("LOGIN - SUCCESSFUL");
          setTimeout(() => {
            // window.location.href = "admin.html";
          }, 500);
        } else {
          alert("Failed to login. Please try again.");
          emailInput.value = "";
          passwordInput.value = "";
        }
      })
      .catch((error) => {
        alert("Failed to login. Please try again. API Error occured");
        emailInput.value = "";
        passwordInput.value = "";
      });
  }
});
