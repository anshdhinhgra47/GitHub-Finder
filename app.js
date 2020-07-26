// Initializing the GitHub class from github.js
const github = new Github;

//Initializing the UI class form ui.js
const ui = new UI;


// Search input
const searchUser = document.getElementById('searchUser');

// Search Input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if(userText !== ''){
        // Make HTTP Call
        github.getUser(userText)
        .then(data => {
            if (data.profile.message === 'Not Found'){
                //Show Alert
                ui.showAlert('User not found!', 'alert alert-danger');

            } else {
                //Show Profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    } else {
        // Clear Profile
        ui.clearProfile();
    }
})
