function checkForm() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let rememberMe = document.querySelector('.remember input[type="checkbox"]').checked;

    if ((username === "23014156-089" && password === "23014156-089") || 
        (username === "Ahmad" && password === "ahmadchatha")) {

        if (rememberMe) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            localStorage.setItem('rememberMe', true);
        } else {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
            localStorage.removeItem('rememberMe');
        }

        window.location.href = "home.html";
    } else {
        alert("Please fill in both the username and password.");
    }
}

window.onload = function () {
    if (localStorage.getItem('rememberMe') === 'true') {
        document.getElementById('username').value = localStorage.getItem('username');
        document.getElementById('password').value = localStorage.getItem('password');
    }
};
