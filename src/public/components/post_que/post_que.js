
function createQue() {
    let userId = window.currentUser.id
    let queBody = $('#inpQue').val()
    
    writeQue(userId, queBody, function(createdPost) {
        window.alert("Que is created.")
    })
}

function writeQue(userId, que) {
    
    $.post('/api/questions', {
        userId: userId, 
        que: que
    }, (question) => {
        window.alert("Your Question : "+ question.que + " is added!")
        $('#content').load('../../components/all_que/all_que.html')
    })
    
}

// All Questions
$('#home').on("click", function() {
    $('#content').load('../../components/all_que/all_que.html')
})


// My Profile
$('#myProfile').on("click", function() {
    $('#content').load('../components/my_profile/my_profile.html')
})

// My Questions

$('#myQue').on("click", function() {
    $('#content').load('../components/my_que/my_que.html')
})