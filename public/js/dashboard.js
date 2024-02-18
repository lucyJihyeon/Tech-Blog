console.log("Script loaded");
const blogs = document.querySelectorAll(".blog-title");
const deleteBtn = document.getElementById("delete");
const createBtn = document.getElementById('create');

//function to handle event listener
const blogDetails = async (e) => {
  e.preventDefault();
  //get the data-id accordingly
  let blogId = e.target.getAttribute("data-id");

  // Implement the logic to fetch the blog details using the blogId
  // await fetch(`/api/comment/${blogId}`, {
  //   method: "GET",
  //   headers: { "Content-Type": "application/json" },
  // });
  window.location.href = `/api/comment/${blogId}`;

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

const handleCreateBlog = () => {
  window.location.href = '/api/blog';
  
}

// add an event listener to the blog listed in the dashboard
blogs.forEach((blog) => {
  blog.addEventListener("click", blogDetails);
});
if (deleteBtn)  {
  deleteBtn.addEventListener("click", handleDelete);
}
createBtn.addEventListener("click", handleCreateBlog);


