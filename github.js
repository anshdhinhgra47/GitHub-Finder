class Github {
    constructor(){
        this.client_id = Can't be disclosed ;
        this.client_secret = Can't be disclosed ;
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch
        (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
        const repoResponse = await fetch
        (`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();


        return {
            // If the variable is profile then "profile: profile" and "simply profile" mean the same thing 
            profile,
            repos
        }
    }
}
