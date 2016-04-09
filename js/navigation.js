function toggleLoginMenu() {
    var login = document.getElementById("login"),
        style = window.getComputedStyle(login),
        display = style.getPropertyValue('display');

    if (display == "none") {
        login.style.display = "block";
    } else {
        login.style.display = "none";
    }
}