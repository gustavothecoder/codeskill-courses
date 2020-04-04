const main = document.getElementsByClassName('content')[0];

function configureLinks() {
    document.querySelectorAll('[link]')
        .forEach(link => {
            link.href = link.attributes['link'].value;
        });
}

function navigate(hash) {
    if (!hash) return

    const destiny = document.querySelector('[destiny-link]');

    const url = hash.substring(1)
    if (url == 'pages/courses.html') 
        main.style.backgroundColor = 'rgb(243, 243, 243)';
    else 
        main.style.backgroundColor = 'white';
    fetch(url)
        .then(resp => resp.text())
        .then(html => {
            destiny.innerHTML = html;
            markButtonAsSelected(hash);
        })
}

function markButtonAsSelected(hash) {
    const links = document.querySelectorAll('[link]');
    links.forEach(link => {
        link.style.border = 'none';
        link.style.padding = '10px 15px';
        link.style.color = 'black';
    })

    const link = document.querySelector(`[link='${hash}']`);
    if (link) {
        link.style.border = '2px solid rgb(11, 105, 182)';
        link.style.padding = '8px 13px'
        link.style.color = 'rgb(11, 105, 182)';
    }
}

function initialPage() {
    const home = document.getElementsByClassName('home-button')[0];
    navigate(home.hash)
}

function showSignIn() {
    document.getElementsByClassName('login-area')[0].style.display = 'flex';
}

function closeSignIn() {
    document.getElementsByClassName('login-area')[0].style.display = 'none';
}

function showSignUp() {
    document.getElementsByClassName('signUp-area')[0].style.display = 'flex';
}

function closeSignUp() {
    document.getElementsByClassName('signUp-area')[0].style.display = 'none';
}

configureLinks();
initialPage();