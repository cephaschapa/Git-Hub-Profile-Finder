class GitHub{
    constructor(){
        this.client_id = '';
        this.secrete = '';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }
    async getUser(user){
        const profileResponse =await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secrete=${this.secrete}`);
        const repoResponses = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secrete=${this.secrete}`)
        const profile = await profileResponse.json();
        const repos = await repoResponses.json();
        return{
            profile,
            repos
        }
    }
}