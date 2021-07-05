function removeUnnecessary() {
    $('.navbar-nav').hide()
    $('form').width('inline')
}


function loginUser() {
        let username = $('#email').val()
        let password = $('#password').val()
        $.get('/api/users/' + username+'/'+password, (user) => {
            $('#content').load('../../components/all_que/all_que.html')
            currentUser = user
            window.localStorage.user = JSON.stringify(user)
            $('.navbar-nav').show()
    })

}

function registerUser() {
    $('#content').load('../../components/register_user/register_user.html')
}

removeUnnecessary()