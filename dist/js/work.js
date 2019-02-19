let projects = [
    {
        id: 1,
        projectname: 'Intro to Augmented Reality',
        githublink: 'https://github.com/vieiralc/augmented-reality',
        viewlink: 'https://vieiralc.github.io/augmented-reality/presentation/'
    },
    {
        id: 2,
        projectname: 'Upgradable ETH Smart Contract',
        githublink: 'https://github.com/vieiralc/blockchain-challenge',
        viewlink: 'https://github.com/vieiralc/blockchain-challenge'
    },
    {
        id: 3,
        projectname: 'Dev Connector (udemy)',
        githublink: 'https://github.com/vieiralc/dev-connector',
        viewlink: 'https://devconnector-assignment.herokuapp.com/'
    },
    {
        id: 4,
        projectname: 'Blockchain Documents',
        githublink: 'https://github.com/vieiralc/document-verification-dapp',
        viewlink: 'https://github.com/vieiralc/document-verification-dapp'
    },
    {
        id: 5,
        projectname: 'Flutter Cryptocurrency',
        githublink: 'https://github.com/vieiralc/cryptocurrency-quotation',
        viewlink: 'https://github.com/vieiralc/cryptocurrency-quotation'
    },
    {
        id: 6,
        projectname: 'Python Snake Game',
        githublink: 'https://github.com/vieiralc/python-snake-game',
        viewlink: 'https://github.com/vieiralc/python-snake-game'
    },
    {
        id: 7,
        projectname: 'SpaceX Launches API',
        githublink: '#',
        viewlink: 'https://vieiralc-spacexlaunches.herokuapp.com/'
    }
]

window.addEventListener('load', () => {
    projects.forEach(project => {
        let div = document.createElement('div')
        let html = `
            <div class="item">
                <a href="${project.viewlink}" target="_blank">
                    <img src="img/projects/project${project.id}.jpg" alt="${project.name}">
                </a>
                <a class="btn-light" href="${project.viewlink}" target="_blank">
                    <i class="fas fa-eye"></i> ${project.projectname}
                </a>
                <a class="btn-dark" href="${project.githublink}" target="_blank">
                    <i class="fab fa-github"></i> Github
                </a>
            </div>
        `
        div.innerHTML = html
        document.querySelector('.projects').appendChild(div)
    })
})