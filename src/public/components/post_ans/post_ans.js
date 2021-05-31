


$('#que_body').text(window.current_que_body)

function createAnsToGivenQue() {
    let queId = window.current_que_id
    let userId = currentUser.id
    let ans_body = $('#inpAns').val()
    
    $.post('/api/answers', {
        userId: userId,
        questionId: queId,
        ans: ans_body
    }, (answer) => {
        
        window.alert("Answered by " + currentUser.name + " Answer body : " + answer.ans)
        $('#content').load('../../components/all_que/all_que.html')
    })


}