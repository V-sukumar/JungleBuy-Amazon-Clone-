let loginBtn = document.getElementById("adminLoginBtn");
let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");
let loginMessage = document.querySelector("#login-message")
let datas=[]
async function fetchAndRenderusers(){
  try {
    let resolved=await fetch(`https://63c822925c0760f69ac60c18.mockapi.io/users`);
    let data=await resolved.json();
    datas=data
  } catch (error) {
    console.log(error)
  }
}
fetchAndRenderusers()
loginBtn.addEventListener("click", (event) => {
  event.preventDefault();

  let email = emailInput.value;
  let password = passwordInput.value;

  if (email == "") {
    alert("Fill your email.");
  } else if (password == "") {
    alert("Fill the password.");
  } 
  function signin(datas){
    datas.forEach((ele)=>{
      if(ele.email==email && ele.password==password){
        alert("LOGIN - SUCCESSFUL");
        window.location.href = "admin.html";
      }else {
        alert("Incorrect details")
        return false
      }
    })
  }
  signin(datas)
});
