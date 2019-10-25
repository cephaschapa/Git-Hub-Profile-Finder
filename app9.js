//search_input
 
const GitHu= new GitHub;
const ui = new UI;  
//search input
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) =>{
    //get input text
    const userText = e.target.value;

    if(userText !== ''){
        console.log(userText);
        //make http call
        GitHu.getUser(userText)
            .then(data =>{ 
                if(data.profile.message === 'Not Found'){
                    //show alert
                    ui.showAlert('User not found', 'alert alert-danger')
                }else{
                    //shoe profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos)
                }
            })
    }else{
        //clear profile
        ui.clearProfile();
        
    }
})