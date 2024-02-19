const updateForm = document.getElementById('edit-form');
const blogId = document.getElementById('blogId').value;

document.addEventListener('DOMContentLoaded', (event) => {
  const updateForm = document.getElementById('edit-form');
  // Assuming 'blogId' is not going to change, if it's dynamic based on user action, it should be retrieved within the updateHandler
  const blogId = document.getElementById('blogId').value;

  const updateHandler = async (e) => {
    e.preventDefault();
    const title = document.querySelector("#blog-title").value.trim();
    const description = document.querySelector("#description").value.trim();
    if (title && description) {
      const response = await fetch(`/api/blog/${blogId}`, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (response.ok) {
        window.location.href = "/api/dashboard";
      } else {
        // Handle errors, e.g., display an error message
        console.error('Failed to update the blog post.');
      }
    } else {
      // Inform the user that title and description are required
      console.log('Title and description are required.');
    }
  };

  // Attach the event listener to the form's 'submit' event
  if (updateForm) {
    updateForm.addEventListener('submit', updateHandler);
  }

  const myButton = document.getElementById('updateBtn');
  if (myButton) {
    myButton.addEventListener('click', updateHandler);
  } else {
    console.error('Button with ID `updateBtn` not found.');
  }
});
