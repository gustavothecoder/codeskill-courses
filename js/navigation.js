function configureLinks() {
    document.querySelectorAll('[link]')
        .forEach(link => {
            link.href = link.attributes['link'].value;
        });
}

function navigate(hash) {
    if (!hash) return

    // const link = document.querySelector(`[link='${hash}']`);
    const destiny = document.querySelector('[destiny-link]');

    const url = hash.substring(1)
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
        link.style.color = 'white';
    })

    const link = document.querySelector(`[link='${hash}']`);
    if (link) {
        link.style.border = '2px solid #00BFFF';
        link.style.padding = '8px 13px'
        link.style.color = '#00BFFF';
    }
}

configureLinks();