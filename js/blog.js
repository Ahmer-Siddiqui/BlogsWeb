// Get the container div where the blog content will be appended
const blogContainer = document.getElementById("allBlogs");

const user = JSON.parse(sessionStorage.getItem("userData"));
if (user) {
  const { heading } = user;
}
console.log(user.blogs);

// Function to append the blog content multiple times
function appendMultipleTimes() {
  user?.blogs?.forEach(({ heading, blogImage, content }) => {
    console.log(heading, blogImage, content);

    blogContainer.innerHTML += `
       <div class="blogContent">
        <h1>${heading}</h1>
        <div>
          <img src="${blogImage}" alt="blogContentImg" />
          <p>${content}</p>
        </div>
      </div>
`;
  });
}
appendMultipleTimes();

const logout = ()=>{
  sessionStorage.clear()
  location.href = "/pages/login.html"
}
