if(!sessionStorage.getItem("userData")){
    window.location.href = "/pages/login.html";
}

const user = JSON.parse(sessionStorage.getItem("userData"));
if(user){
    document.getElementById("userImage").src = user.profilePicture
    document.getElementById("userName").innerText = user.firstName + user.lastName
    document.getElementById("userIntro").innerText = user.userIntro
}


