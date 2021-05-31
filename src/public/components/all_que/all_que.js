
function loadQuestions() {

    $.get('/api/questions', (questions) => {
        for(let q of questions) {
            $('#question-container').append(
                $(`
                <div class="card">
                    <img class="card-img-top" src="..." alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${q.user.name}</h5>
                        <p class="card-text">${q.que}</p>
                        <a href="#" class="btn btn-primary" onclick="postAns('${q.que}', '${q.id}')">Answer this Quesstion</a>
                    </div>
                    <hr>
                    <div class="column" id="answer-container">
                    </div>
                </div>
                `)
            )
            
            $.get('/api/answers/' + 11, (answers) => {
                for (let a of answers) {
                   $('#answer-container').append(
                       $(`
                            <hr>
                        
                            <div class="card-body">
                            <h5 class="card-title">${a.user.name}</h5>
                            <p class="card-text">${a.ans}</p>
                            
                            </div>
                        
                       `)
                   )
                }
            })
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