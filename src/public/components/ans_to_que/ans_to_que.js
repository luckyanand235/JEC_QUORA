



$('#queBody').text(window.current_que_body)

function loadAnswers() {
    let queId = window.current_que_id
    // console.log(queId)
    $.get('/api/answers/' + queId, (answers) => {
        for(let a of answers) {
            $('#answer-container').append(
                $(`
                <div class="card">
                    
                    <div class="card-body">
                        <p class="card-title">${a.user.name}</p>
                        <a class="ansBody" href="#"><h5 class="card-text">${a.ans}</h5></a>
                        <br>
                        
                    </div>
                
                    <br>
                </div>
                `)
            )
        }
        if($('#answer-container')[0].children[0] == undefined) {
            $('#answer-container').append(
                $(`
                <div class="card-body">
                    <p class="card-title">No One Has Answered This Question Yet.</p>
                    <br>
                
                </div>
                `)
            )
        }
    })
}

function postAnswer() {
    postAns(current_que_body, current_que_id)
}