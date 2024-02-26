//function to create a blog post 
const createHandler = async (e) => {
  e.preventDefault();

  const title = document.querySelector("#blog-title").value.trim();
  const description = document.querySelector("#description").value.trim();

  if (title && description) {
    const response = await fetch("/api/blog", {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (response.ok) {
      console.log('response is ok');
      window.location.href = "/api/dashboard";
    } else {
        console.log('not ok');
    };
  }
};

document
  .querySelector("#create-form")
  .addEventListener("submit", createHandler);
