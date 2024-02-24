const refresh = document.querySelector("#title");

//function to refresh the window when clicked.
const refreshHandler = () => {
    window.location.reload();
};

refresh.addEventListener("click", refreshHandler);