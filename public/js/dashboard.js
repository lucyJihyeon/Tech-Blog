const blogs = document.querySelectorAll(".blog-title");
const deleteBtn = document.getElementById("delete");

//function to handle event listener
const blogDetails = async (e) => {
  e.preventDefault();
  //get the data-id accordingly
  let blogId = this.getAttribute("data-id");

  // Implement the logic to fetch the blog details using the blogId
  await fetch(`/api/comment/${blogId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
};

const handleDelete = async (e) => {
  let blogId = e.target.getAttribute("data-id");
  const response = await fetch(`/api/dashboard/${blogId}`, {
    method: "DELETE",
  });
  if (response.ok) {
    window.location.href = '/api/dashboard';
  }
  
};

// add an event listener to the blog listed in the dashboard
blogs.forEach((blog) => {
  blog.addEventListener("click", blogDetails);
});

deleteBtn.addEventListener("click", handleDelete);
