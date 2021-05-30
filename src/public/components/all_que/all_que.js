
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
                        <a href="#" class="btn btn-primary">Answer this Quesstion</a>
                    </div>
                </div>
                `)
            )
        }
    })

}

$('#navbarDropdown').text(currentUser.name)


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