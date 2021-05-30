
$('#name').text(currentUser.name)
$('#username').text(currentUser.username)
$('#rollno').text(currentUser.rollno)
$('#branch').text(currentUser.branch)
$('#semester').text(currentUser.semester)
$('#college').text(currentUser.college)


// My Questions

$('#myQue').on("click", function() {
    $('#content').load('../components/my_que/my_que.html')
})

function editProfile() {
    $('#content').load('../components/edit_profile/edit_profile.html')
}