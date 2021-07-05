// const { createUser } = require("../../../controller/users")
window.localStorage.user = JSON.stringify("Temp user")
function registerUserToDB() {

    let username = $('#email').val()
    let password = $('#password').val()
    let name = $('#name').val()

    $.post('/api/users', { 
        username: username, 
        password: password, 
        name: name 
    }, (user)=> {
        window.alert("User " + user.username + " is Registerd!")
        // let createUser = user
        window.localStorage.user = JSON.stringify(user)
        $('.navbar-nav').show()
        $('#content').load('../../components/all_que/all_que.html')
        $('#navbarDropdown').text(currentUser.name)
        location.reload()
    })
}