
//function to refresh the window when clicked.
const refreshHandler = () => {
    window.location.reload();
};
//function to redirect users to a new url to render the blog details
const viewBlogDetail = (e) => {
    e.preventDefault();
    const blogId = e.currentTarget.getAttribute("data-index");
    console.log(blogId);
    window.location.href = `/api/comment/create/${blogId}`;

}
//functino to create a new comment with the blogId
const createCommentHandler = async (e) => {
    e.preventDefault();
    const description = document.querySelector('#commenting').value.trim();
    const blogId = document.querySelector('#blogId').value;
    if (description) {
       const response = await fetch(`/api/comment/${blogId}`, {
        method: "POST",
        body: JSON.stringify({
            description,
        }),
        headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
       });
       if (response.ok) {
        window.location.href = `/api/comment/create/${blogId}`;
       } else{
        console.log('error!')
       };
    }
}


// Adding event listener to the form submission
document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.querySelector('#comment-form');
    const refresh = document.querySelector("#title");
    const blogDetail = document.querySelectorAll(".detail-blog");

    refresh.addEventListener("click", refreshHandler);

    if (commentForm) {
      commentForm.addEventListener('submit', createCommentHandler);
    };

    //add an event listener to each of the blog posting 
    if (blogDetail.length > 0) {
        blogDetail.forEach(blog => {
            blog.addEventListener("click", viewBlogDetail);
        });
    };
    
  });
