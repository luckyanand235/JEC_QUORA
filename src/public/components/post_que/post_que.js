$('#home').on("click", function() {
    $('#content').load('../../components/all_que/all_que.html')
})

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