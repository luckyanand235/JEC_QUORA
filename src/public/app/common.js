$(() => {
    $('#navbar').load('../components/navbar/navbar.html')
    if(isUser()) {
        $('#content').load('../components/all_que/all_que.html')

        $('#home').on("click", function() {
            $('#content').load('../../components/all_que/all_que.html')
        })



        $('#myProfile').on("click", function() {
            $('#content').load('../components/my_profile/my_profile.html')
        })

    }
    else if(currentUser == "Temp user"){
        $('#content').load('../components/register_user/register_user.html')
    }
    else {
        
        
        $('#content').load('../components/login/login.html')
        
        
    }
    $('#footer').load('../components/footer.html')

    
})



function isUser() {
    window.currentUser = window.localStorage.user ? JSON.parse(window.localStorage.user) : null
    if(currentUser && currentUser != "Temp user") {
        return true;
    } else {
        return false;
    }
}