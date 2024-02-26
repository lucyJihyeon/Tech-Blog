const refresh = document.querySelector("#title");
const blogDetail = document.querySelectorAll(".detail-blog");


//function to refresh the window when clicked.
const refreshHandler = () => {
    window.location.reload();
};

refresh.addEventListener("click", refreshHandler);

//function to redirect users to a new url to render the blog details
const viewBlogDetail = (e) => {
    e.preventDefault();
    const blogId = e.currentTarget.getAttribute("data-index");
    console.log(blogId);
    window.location.href = `/api/comment/create/${blogId}`;

}



//add an event listener to each of the blog posting 
if (blogDetail.length > 0) {
    blogDetail.forEach(blog => {
        blog.addEventListener("click", viewBlogDetail);
    });
}