
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