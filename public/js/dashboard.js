const blogs = document.querySelectorAll(".blog-title");
const deleteBtn = document.getElementById("delete");
const createBtn = document.querySelector(".create");
const editBtn = document.getElementById("edit");
const commentBtn = document.querySelector(".bookmarkBtn");
const createCommentBtn = document.querySelector('.create-commentBtn');

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
  let blogId = e.target.getAttribute("data-id");
  window.location.href = `/api/blog/${blogId}`;
};

//functino to display all the comments when clicked
const displayComments = () => {
  const cmtContainer = document.querySelector(".comments");
  cmtContainer.style.display = "flex";
}

//function to redirect the user to send a get request to the new href url 
const createCommentHandler = (e) => {
  e.preventDefault();
  const blogId = e.currentTarget.getAttribute("data-id");
  window.location.href = `api/comment/create-comment/${blogId}`;
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

if(commentBtn)  {
  commentBtn.addEventListener("click", displayComments);
};

if(createCommentBtn)  {
  createCommentBtn.addEventListener("click", createCommentHandler);
}
