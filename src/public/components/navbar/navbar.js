function logoutUser() {
    console.log("Logout")
    window.localStorage.user = null
    location.reload();
}