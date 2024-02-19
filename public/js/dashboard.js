const blogs = document.querySelectorAll(".blog-title");
const deleteBtn = document.getElementById("delete");
const createBtn = document.getElementById("create");
const editBtn = document.getElementById("edit");

//function to handle event listener
const blogDetails = async (e) => {
  e.preventDefault();
  //get the data-id accordingly
  let blogId = e.target.getAttribute("data-id");
  window.location.href = `/api/comment/${blogId}`;
};

const handleDelete = async (e) => {
  let blogId = e.target.getAttribute("data-id");
  const response = await fetch(`/api/dashboard/${blogId}`, {
    method: "DELETE",
  });
  if (response.ok) {
    window.location.href = "/api/dashboard";
  }
};

const handleCreateBlog = () => {
  window.location.href = "/api/blog";
};

const editHandler = async (e) => {
  e.preventDefault();
  console.log("edit handler called");
  let blogId = e.target.getAttribute("data-id");
  window.location.href = `/api/blog/${blogId}`;
};

// add an event listener to the blog listed in the dashboard
blogs.forEach((blog) => {
  blog.addEventListener("click", blogDetails);
});
if (deleteBtn) {
  deleteBtn.addEventListener("click", handleDelete);
};
if (createBtn) {
  createBtn.addEventListener("click", handleCreateBlog);
};
if (editBtn) {
  editBtn.addEventListener("click", editHandler);
};
