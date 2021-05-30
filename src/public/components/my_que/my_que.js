



let userId = currentUser.id

$.get('/api/questions/' + userId, (questions) => {
    for(let q of questions) {
        
        $('#question-container').append(
            $(`
            <div class="card">
                
                <div class="card-body">
                    
                    <p class="card-text">${q.que}</p>
                    <button class="btn btn-secondary">Edit</button>
                    <button class="btn btn-secondary">Delete</button>
                    
                </div>
            </div>
            `)
        )
    }
})



// All Questions
$('#home').on("click", function() {
    $('#content').load('../../components/all_que/all_que.html')
})

// Post Question
$('#postQue').on("click", function() {
    $('#content').load('../components/post_que/post_que.html')
})

// My Profile Section

$('#myProfile').on("click", function() {
    $('#content').load('../components/my_profile/my_profile.html')
})
