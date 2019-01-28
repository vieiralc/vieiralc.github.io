window.addEventListener('load', () => {
    let date = new Date();
    let year = date.getFullYear();

    let div = document.createElement('div');
    let content = `
        Copyright &copy; ${year}
    `;
    div.innerHTML = content;
    document.querySelector('#main-footer').appendChild(div);
});