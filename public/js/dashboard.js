// Corrected definition and iteration over multiple elements
const blogs = document.querySelectorAll('.list-group-item-action'); // Use querySelectorAll for better compatibility with forEach

const blogDetails = async (e) =>  {
    e.preventDefault();
    // Use getAttribute to be consistent without jQuery
    var blogId = this.getAttribute('data-id'); 

    // Implement the logic to fetch the blog details using the blogId
    await fetch(`api/comment/${blogId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
};

// Attach event listeners
blogs.forEach(blog => {
    blog.addEventListener('click', blogDetails);
});
