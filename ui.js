class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }
    showProfile(user){
        this.profile.innerHTML = `
            <div class = "card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary mb-4 btn-block">View Profile</a>
                    </div> 
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-primary">Public Gist ${user.public_gist}:</span>
                        <span class="badge badge-primary">Followers: ${user.followers}</span>
                        <span class="badge badge-primary">Following: ${user.following}</span>
                        <br></br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website / Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>                
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h1>
            <div id="repos"></div>
        `
    }

    showRepos(repos){
        let output = '';
        repos.forEach(function(repo){
            output += `
                
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary">Public Repos: ${repo.stargazers_count}</span>
                            <span class="badge badge-primary">Public Gist ${repo.watchers_count}:</span>
                            <span class="badge badge-primary">Followers: ${repo.forks_count}</span>
                            <br></br>
                        </div>
                    </div>                
                </div>
            `
        });
        document.getElementById('repos').innerHTML = output;
    }
    showAlert(message, className){
        this.clearAlert();
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.searchContainer');

        const search = document.querySelector('.search');
        container.insertBefore(div, search);

        //timeout
        setTimeout(() =>{
            this.clearAlert()
        }, 3000)
    }
    clearProfile(){
        this.profile.innerHTML = `<h4>Input Flield Empty</h4>`;
    }
    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }
}