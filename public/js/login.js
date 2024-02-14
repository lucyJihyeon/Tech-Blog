const loginFormHandler = async (event) => {
    event.preventDefault();
    const statusText = document.getElementById("status");
    statusText.textContent = "";
  
    // Collect values from the login form
    const name = document.querySelector('#name-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (name && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ name, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        // If successful, redirect the browser to the dashboard page
        document.location.replace('/api/dashboard');
      } else {
        statusText.textContent = "Incorrect user name or password, please try again!"
      }
    }
  };
  
  //function to collect values from the signup form 
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    //send a post request to the ending api/users to crate a new userdata
    if (name && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        //then redirect the user to the dashboard 
        document.location.replace('/api/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  