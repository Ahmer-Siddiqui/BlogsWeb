if(!sessionStorage.getItem("userData")){
    window.location.href = "/pages/login.html";
}

const user = JSON.parse(sessionStorage.getItem("userData"));
if(user){
    document.getElementById("workingDetail").innerText = user.workingDetail
    document.getElementById("phoneNo").innerText = user.phoneNo
    document.getElementById("email").innerText = user.email
}

