
function loadQuestions() {
    console.log(currentUser.id)
    $.get('/api/questions', { userId: currentUser.id }, (questions) => {
        for(let q of questions) {
            $('#question-container').append(
                $(`
                <div class="card">
                    
                    <div class="card-body">
                        <p class="card-title">${q.user.name}</p>
                        <a class="queBody" href="#" onclick="ansToQue('${q.id}','${q.que}')"><h5 class="card-text">${q.que}</h5></a>
                        <br>
                        <a href="#" class="btn btn-primary" onclick="postAns('${q.que}', '${q.id}')">Answer this Quesstion</a>
                    </div>
                    <hr>
                    <br>
                </div>
                `)
            )
        }
    })

}

$('#navbarDropdown').text(currentUser.name)

// postAns function of button 

function postAns(que, id) {
    $('#content').load("./../components/post_ans/post_ans.html")
    window.current_que_body = que
    window.current_que_id = id
}


// Post Question
$('#postQue').on("click", function() {
    $('#content').load('../components/post_que/post_que.html')
})

// My Profile Section

$('#myProfile').on("click", function() {
    $('#content').load('../components/my_profile/my_profile.html')
})

// My Questions

$('#myQue').on("click", function() {
    $('#content').load('../components/my_que/my_que.html')
})

// Ans to Que

function ansToQue(id, queBody) {
    $('#content').load("./../components/ans_to_que/ans_to_que.html")
    window.current_que_body = queBody
    window.current_que_id = id
}