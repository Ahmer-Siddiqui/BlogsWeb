
const userData = async (email,password) => {
  const response = await fetch("https://blogs-web-backend.vercel.app/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password
    }),
  });
  const data = await response.json();
  if(!(data && data.data)){
    alert("Invalid credentials")
    return;  // Return early if the user credentials are invalid
  }
  sessionStorage.setItem("userData",JSON.stringify(data.data))
  location.href = "/";
};



// Handling the login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission behavior

    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    userData(email,password);
   
});
