

function editProfile(username, password, rollno, branch, semester, college) {

    $.post('/api/users/edit_profile', {
        username: username,
        password: password,
        rollno: rollno,
        branch: branch,
        semester: semester,
        college: college
    }, (user) => {
        window.alert('User profile has been edited.')
        window.currentUser = user
        window.localStorage.user = JSON.stringify(user)
        $('#content').load('../../components/my_profile/my_profile.html')
    })

}

function editUserProfile() {
    let username = $('#email').val()
    let password = $('#password').val()
    let rollno = $('#rollno').val()
    let branch = $('#branch').val()
    let semester = $('#semester').val()
    let college = $('#college').val()
    editProfile(username, password, rollno, branch, semester, college)
}